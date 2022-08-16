import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
  wallet,
} from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import IsMounted from "@/components/IsMounted";
import { AppConfig } from "@/utils/AppConfig";
import { ModalProvider } from "react-modal-hook";
import {
  ALCHEMY_ID,
  ENABLE_TESTNETS,
  FORKING_ENABLED,
} from "@/utils/constants";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

console.log(FORKING_ENABLED);
const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.optimism,
    chain.polygon,
    chain.arbitrum,
    ...(ENABLE_TESTNETS === "true"
      ? [chain.hardhat, chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
      : []),
  ],
  true
    ? [
        jsonRpcProvider({
          priority: 0,
          rpc: () => ({
            http: "http://127.0.0.1:8545",
          }),
        }),
        publicProvider(),
      ]
    : [publicProvider()]
);

const { wallets } = getDefaultWallets({
  appName: AppConfig.title,
  chains,
});

const dappInfo = {
  appName: AppConfig.title,
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      wallet.argent({ chains }),
      wallet.trust({ chains }),
      wallet.ledger({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider appInfo={dappInfo} chains={chains}>
        <ModalProvider>
          <IsMounted>
            <Component {...pageProps} />
          </IsMounted>
        </ModalProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
