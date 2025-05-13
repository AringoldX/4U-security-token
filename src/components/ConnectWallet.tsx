import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="px-[26px] h-[36px] border border-white rounded-[6px] text-[16px] uppercase"
                    onClick={openConnectModal}
                  >
                    REQUEST AN AUDIT
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    className="px-[26px] h-[36px] border border-white rounded-[6px] text-[16px] uppercase bg-pink-700"
                    onClick={openChainModal}
                    type="button"
                  >
                    WRONG NETWORK
                  </button>
                );
              }

              return (
                <button
                  className="px-[26px] h-[36px] border border-white rounded-[6px] text-[16px] uppercase"
                  onClick={openAccountModal}
                >
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;
