import { useState } from 'react';
import { useAccount, useDisconnect, useReadContract, useWriteContract, usePublicClient } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import StakingABI from "../web3/abis/Staking";

const StakingContract = "0x8613Be928C95E98591C62B8412a64fcE68de347d";

const abbreviateAddress = (address: string | undefined) => {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function ConnectButton() {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const publicClient = usePublicClient();
  const { writeContractAsync } = useWriteContract();
  const { disconnectAsync } = useDisconnect();
  const [isLoading, setIsLoading] = useState(false);

  const onConnect = () => {
    open?.();
  };

  const onDisconnect = async () => {
    await disconnectAsync();
  };

  const { data: rewards } = useReadContract({
    address: StakingContract,
    abi: StakingABI,
    functionName: "calculateReward",
    args: [address]
  }) as { data: bigint[] | undefined };

  const claimReward = async () => {
    let hash;

    setIsLoading(true);
    try {
      hash = await writeContractAsync({
        address: StakingContract,
        abi: StakingABI,
        functionName: "claimReward",
      });

      await publicClient?.waitForTransactionReceipt({ hash });
    } catch (error) {
      console.error("Claim Reward failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return <>
    {address && <button className={`text-black w-[170px] h-[56px] rounded-lg flex items-center ${rewards ? 'bg-[#15C285]' : 'bg-[#505f5a]'}`}>
      <div
        className={`text-center w-full border-r border-r-black h-full flex flex-col justify-center items-center 
          ${rewards && !isLoading ? 'cursor-pointer mt-2' : 'cursor-not-allowed'}`}
        onClick={rewards && !isLoading ? () => claimReward() : () => { }}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Claiming...</span>
          </div>
        ) : (
          <>
            Claim
            <span className="font-extralight text-xs">{abbreviateAddress(address)}</span>
          </>
        )}
      </div>
      <img
        src="/images/logout-svgrepo-com.svg"
        alt="Logout"
        title="Logout"
        className="w-4 h-4 mx-2 cursor-pointer hover:opacity-80"
        onClick={onDisconnect}
      />
    </button>}
    {!address && (
      <button className="bg-[#15C285] text-black w-[170px] h-[56px] rounded-lg" onClick={onConnect}>
        Connect Wallet
      </button>
    )}
  </>;
}
