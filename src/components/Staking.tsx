import { useState } from 'react';
import { useAccount, useReadContract, useWriteContract, usePublicClient } from 'wagmi';
import { formatUnits, parseUnits, parseEther } from 'viem';

import Header from './Header';
import TokenABI from "../web3/abis/Token";
import StakingABI from "../web3/abis/Staking";

const TokenContract = "0x81fAc8b709d9D7C48D70E91d0d481417cb1607cA";
const StakingContract = "0x8613Be928C95E98591C62B8412a64fcE68de347d";

const Staking = () => {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync } = useWriteContract()
  const [amount, setAmount] = useState<string>('0');
  const [isLoading, setIsLoading] = useState(false);

  const { data: rewardRate } = useReadContract({
    address: StakingContract,
    abi: StakingABI,
    functionName: "rewardRate",
  }) as { data: bigint | undefined };

  const { data: stakes, refetch: refetchStakes } = useReadContract({
    address: StakingContract,
    abi: StakingABI,
    functionName: "stakes",
    args: [address]
  }) as { data: bigint[] | undefined, refetch: () => void };
  console.log("stakes: ", stakes);

  const { data: balanceOf, refetch: refetchBalance } = useReadContract({
    address: TokenContract,
    abi: TokenABI,
    functionName: "balanceOf",
    args: [address]
  }) as { data: bigint | undefined, refetch: () => void };

  const { data: totalStaked, refetch: refetchTotalStaked } = useReadContract({
    address: StakingContract,
    abi: StakingABI,
    functionName: "totalStaked",
  }) as { data: bigint | undefined, refetch: () => void };

  const refreshData = () => {
    refetchStakes();
    refetchBalance();
    refetchTotalStaked();
  };

  const stake = async () => {
    if (!amount) return;
    const amountBigInt = parseUnits(amount, 18);

    setIsLoading(true);
    try {
      const allowance = await publicClient?.readContract({
        address: TokenContract,
        abi: TokenABI,
        functionName: "allowance",
        args: [address, StakingContract],
      });

      let hash;

      if (BigInt(Number(allowance)) < parseEther(amount)) {
        hash = await writeContractAsync({
          address: TokenContract,
          abi: TokenABI,
          functionName: "approve",
          args: [StakingContract, amountBigInt]
        });

        await publicClient?.waitForTransactionReceipt({ hash });
      }

      hash = await writeContractAsync({
        address: StakingContract,
        abi: StakingABI,
        functionName: "stake",
        args: [amountBigInt]
      });

      await publicClient?.waitForTransactionReceipt({ hash });

      refreshData();
      setAmount('0');
    } catch (error) {
      console.error("Staking failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const unStake = async () => {
    if (!amount) return;
    const amountBigInt = parseUnits(amount, 18);

    setIsLoading(true);
    try {
      const hash = await writeContractAsync({
        address: StakingContract,
        abi: StakingABI,
        functionName: "unstake",
        args: [amountBigInt]
      });

      await publicClient?.waitForTransactionReceipt({ hash });

      refreshData();
      setAmount('0');
    } catch (error) {
      console.error("Unstaking failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  // Format display values
  const formattedRewardRate = rewardRate ? Number(rewardRate) * 60 * 24 * 365 : 0;
  const formattedBalance = balanceOf ? formatUnits(balanceOf, 18) : '0';
  const formattedStakedAmount = (stakes && stakes[0])
    ? Number(formatUnits(stakes[0], 18)).toFixed(2)
    : '0';
  const formattedTotalStaked = totalStaked ? Number(formatUnits(totalStaked, 18)).toFixed(2) : '0';

  return (
    <div>
      <Header />
      <div className="flex flex-col pc:flex-row pt-[140px] pb-[40px] justify-between w-full px-[60px] pc:px-[100px]">
        <div className="px-[20px] sm:px-[40px] flex flex-1 flex-col">
          <div className="w-full">
            <img className="" src="/images/captain.png" />
          </div>
          <div className="w-full text-[30px] sm:text-[40px] py-[20px]">
            Stake Your Payment
          </div>
          <div className="w-full text-[15px] sm:text-[20px]">
            Built on Binance Smart Chain, 4U Token combines security, compliance, and gamified engagement for the future of digital asset management.
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="my-[20px] px-[25px] py-[20px] text-black rounded-lg p-4 bg-[#1CF2AA]">
                Explore 4U Mini-Game
              </div>
            </div>
            <div className=" relative bg-transparent flex items-center justify-center">
              <img
                className="max-h-[160px] object-contain mix-blend-screen"
                src="/images/profile.gif"
                alt="Blended GIF"
              />
            </div>

          </div>
        </div>
        <div className="flex flex-1 flex-col rounded-[20px] border-[#333333] border-2 h-[380px]">
          <div className="flex flex-row p-[15px] border-[#333333] border-b-2 mx-5">
            <div className="w-[40px]">
              <img src="/images/logo.png" />
            </div>
            <div className="h-full text-[20px] text-[#505f5a] flex items-center pl-[5px] pt-[12px] pc:pt-0">
              Stake 4U Token
            </div>
          </div>
          <div className="flex flex-row my-[5px] py-2 px-5">
            <div className="flex flex-1 flex-col items-center justify-center">
              <span className="text-[20px] my-1">{(formattedRewardRate / (10 ** 6)).toFixed(2)}%</span>
              <span className="text-[12px] text-[#999999]">Staking APR</span>
            </div>
            <div className="flex flex-1 flex-col border-l-2 border-[#333333] items-center justify-center">
              <span className="text-[20px] my-1">30.0%</span>
              <span className="text-[12px] text-[#999999]">Max Slashing</span>
            </div>
            <div className="flex flex-1 flex-col border-l-2 border-[#333333] items-center justify-center">
              <span className="text-[20px] my-1">{Number(formattedBalance).toFixed(4)} 4U</span>
              <span className="text-[12px] text-[#999999]">Wallet Balance</span>
            </div>
          </div>
          <div className="flex flex-row mx-5 justify-between text-[18px] rounded-[10px] border-[#333333] border-2 p-3">
            <input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              placeholder='Staking Amount: '
              className='w-full'
              value={amount}
            />
          </div>
          <div className="flex flex-col text-[18px] my-4 px-5">
            <div className="flex flex-row justify-between py-2">
              <div className="text-[#999999]">
                Staked Charges:
              </div>
              <div className="">
                {formattedStakedAmount}
              </div>
            </div>
            <div className="flex flex-row justify-between py-2">
              <div className="text-[#e47f7f]">
                Exchanges Charges:
              </div>
              <div className="">
                $12.2$
              </div>
            </div>
            <div className="flex flex-row justify-between py-2">
              <div className="text-[#999999]">
                Staked Repository:
              </div>
              <div className="">
                {formattedTotalStaked}
              </div>
            </div>
          </div>
          {Array.isArray(stakes) && stakes.length > 0 && stakes[0] > 0n ? (
            <button
              className="disabled:bg-[#505f5a] bg-[#15C285] text-[30px] text-black h-[60px] flex items-center justify-center rounded-b-[18px]"
              onClick={unStake}
              disabled={!address || isLoading}
            >
              {isLoading ? "Processing..." : "Unstake Now"}
            </button>
          ) : (
            <button
              className="disabled:bg-[#505f5a] bg-[#15C285] text-[30px] text-black h-[60px] flex items-center justify-center rounded-b-[18px]"
              onClick={stake}
              disabled={!address || isLoading}
            >
              {isLoading ? "Processing..." : "Stake Now"}
            </button>
          )}
        </div>
      </div>
    </div >
  );
};

export default Staking;
