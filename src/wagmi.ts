import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, mainnet, sepolia } from "wagmi";
import { goerli, bsc, avalanche } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const walletConnectProjectId = "3e77a363429ac6529c1e19a444d573da";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [...(import.meta.env?.MODE === "development" ? [sepolia] : [mainnet])],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My wagmi + RainbowKit App",
  chains,
  projectId: walletConnectProjectId,
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };
