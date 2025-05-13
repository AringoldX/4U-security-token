import { isAddress, type Abi, type Address } from "viem";
import PresaleAbi from "./abis/Presale.json";
import StakingAbi from "./abis/Staking.json";
import { erc20ABI } from "wagmi";

export const TokenAddress =
  "0xDe5aAA8ED2F77c8C4cbdf9B1253A05858ac99DF9" as Address;
export const PresaleAddress =
  "0xD33D45234800f2A33a971072a301C9eE33e3394C" as Address;
export const StakingAddress =
  "0x2327fD670D722c96D1E31fb68157Ed5df8499EAF" as Address;

export const token = {
  abi: erc20ABI,
  address: TokenAddress,
};

export const presale = {
  abi: PresaleAbi as Abi,
  address: PresaleAddress,
} as const;

export const staking = {
  abi: StakingAbi as Abi,
  address: StakingAddress,
} as const;
