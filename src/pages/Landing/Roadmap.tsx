const Roadmap = () => {
  return (
    <div className="flex flex-col px-[40px] py-[40px] bg-[#021602] bg-no-repeat bg-[100%_auto]">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex lg:flex-1 flex-col text-[40px] py-[20px] ite justify-center">
          <span className="w-full">Decentralized Exchange</span>
          <div className="font-bold bg-gradient-to-r from-[#ec2cec] to-[#15c285] bg-clip-text text-transparent">
            DEX
          </div>
        </div>
        <div className="lg:flex-1">
          Trade directly in a secure environment with low fees, supporting Binance Smart Chain tokens and future cross-chain compatibility.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row pc:flex-col justify-between">
        <div className="flex flex-col pc:flex-row align-center mt-[5px] pc:my-[5px]">
          <div className="flex flex-row py-[3px] pc:py-0">
            <div className="w-[16px] h-[16px] bg-[#15c285] my-[24px] rounded-full mx-[4px]"></div>
            <div className="w-[16px] hidden pc:block h-[16px] border-t-[2px] border-white border-dashed mt-[32px] mb-[22px] mx-[4px]"></div>
            <div className="">
              <img className="h-[60px]" src="/images/roadmap/1.png" />
            </div>
          </div>
          <div className="flex flex-row py-[3px] pc:py-0">
            <div className="w-[16px] h-[16px] hidden pc:block border-t-[2px] border-white border-dashed mt-[32px] mb-[22px] mx-[4px]"></div>
            <div className="w-[16px] h-[16px] bg-[#15c285] my-[24px] rounded-full mx-[4px]"></div>
            <div className="w-[16px] h-[16px] hidden pc:block border-t-[2px] border-white border-dashed mt-[32px] mb-[22px] mx-[4px]"></div>
            <div className="">
              <img className="h-[60px]" src="/images/roadmap/2.png" />
            </div>
          </div>
          <div className="flex flex-row py-[3px] pc:py-0">
            <div className="w-[16px] h-[16px] hidden pc:block border-t-[2px] border-white border-dashed mt-[32px] mb-[22px] mx-[4px]"></div>
            <div className="w-[16px] h-[16px] bg-[#15c285] my-[24px] rounded-full mx-[4px]"></div>
            <div className="">
              <img className="h-[60px]" src="/images/roadmap/3.png" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pc:flex-row align-center pc:my-[5px]">
          <div className="flex flex-row py-[3px] pc:py-0">
            <div className="w-[16px] h-[16px] bg-[#15c285] my-[24px] rounded-full mx-[4px]"></div>
            <div className="w-[16px] hidden pc:block h-[16px] border-t-[2px] border-white border-dashed mt-[32px] mb-[22px] mx-[4px]"></div>
            <div className="">
              <img className="h-[60px]" src="/images/roadmap/4.png" />
            </div>
          </div>
          <div className="flex flex-row py-[3px] pc:py-0">
            <div className="w-[16px] h-[16px] hidden pc:block border-t-[2px] border-white border-dashed mt-[32px] mb-[22px] mx-[4px]"></div>
            <div className="w-[16px] h-[16px] bg-[#15c285] my-[24px] rounded-full mx-[4px]"></div>
            <div className="w-[16px] h-[16px] hidden pc:block border-t-[2px] border-white border-dashed mt-[32px] mb-[22px] mx-[4px]"></div>
            <div className="">
              <img className="h-[60px]" src="/images/roadmap/5.png" />
            </div>
          </div>
          <div className="flex flex-row py-[3px] pc:py-0">
            <div className="w-[16px] h-[16px] hidden pc:block border-t-[2px] border-white border-dashed mt-[32px] mb-[22px] mx-[4px]"></div>
            <div className="w-[16px] h-[16px] bg-[#15c285] my-[24px] rounded-full mx-[4px]"></div>
            <div className="">
              <img className="h-[60px]" src="/images/roadmap/6.png" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Roadmap;