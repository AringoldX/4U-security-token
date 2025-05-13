const Roadmap = () => {
  return (
    <div className="flex flex-col items-center my-[20px] max-w-[1280px] mx-auto px-5" id="security">
    
      <div className="flex flex-col pc:flex-row">

        <div className="relative">
          <div className="bg-[#AAAAAA] m-[20px] min-w-[300px] max-w-[450px] h-[220px] p-[2px] rounded-[16px]">
            <div className="flex flex-col space-y-3 bg-[#151515] rounded-[15px] p-[15px] w-full h-full">
              <span>
                <img className="max-w-[100px]" src="/images/concept.png" />
              </span>
              <span className="capitalize font-semibold text-[24px]">
                Secure Identity
              </span>
              <span className="mt-1 text-[14px]">
                Enable KYC/AML compliance with blockchain-based identity solutions while safeguarding your privacy.
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-b m-[20px] min-w-[300px] max-w-[450px] h-[220px] from-[#15c285] via-[#e7e0e0] to-[#ec2cec] p-[2px] rounded-[16px]">
            <div className="flex flex-col space-y-3 bg-[#151515] rounded-[15px] p-[15px] w-full h-full">
              <span>
                <img className="max-w-[100px]" src="/images/concept.png" />
              </span>
              <div className="text-[24px] font-bold bg-gradient-to-r from-[#15c285] via-[#e7e0e0] to-[#ec2cec] bg-clip-text text-transparent">
                Seamless Trading
              </div>
              <span className="mt-1 text-[14px]">
                Enable KYC/AML compliance with blockchain-based identity solutions while safeguarding your privacy.
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-[#AAAAAA] m-[20px] min-w-[300px] max-w-[450px] h-[220px] p-[2px] rounded-[16px]">
            <div className="flex flex-col space-y-3 bg-[#151515] rounded-[15px] p-[15px] w-full h-full">
              <span>
                <img className="max-w-[100px]" src="/images/concept.png" />
              </span>
              <span className="capitalize font-semibold text-[24px]">
                Gamifield Engagement
              </span>
              <span className="mt-1 text-[14px]">
                Earn rewards by completing in-game challenges, use tokens for purchases, and win exclusive NFTs in tournaments.
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Roadmap;
