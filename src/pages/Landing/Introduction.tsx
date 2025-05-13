const Introduction = () => {
  return (
    <div id="home" className="flex flex-col w-full relative bg-cover bg-norepeat bg-[] bg-gray-900">
      <div className="flex pt-[140px] pb-[40px] justify-between w-full px-[40px] md:px-[100px] flex-col lg:flex-row">
        <div className="px-[40px] flex flex-col">
          <div className="w-full">
            <img className="" src="/images/captain.png" />
          </div>
          <div className="w-full text-[40px] py-[20px]">
            Your Digital Ownership
          </div>
          <div className="w-full text-[20px]">
            Built on Binance Smart Chain, 4U Token combines security, compliance, and gamified engagement for the future of digital asset management.
          </div>
          <div className="flex">
            <div className="my-[20px] px-[25px] py-[20px] text-black rounded-lg p-4 bg-[#1CF2AA]">
              Explore 4U Mini-Game
            </div>
            <div></div>
          </div>
        </div>
        <div className=" relative bg-transparent">
          <img 
            className="object-contain mix-blend-screen"
            src="/images/profile.gif" 
            alt="Blended GIF" 
          />
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center flex-wrap gap-x-16 gap-y-6 px-[62px] w-full my-[38px]">
          <div className="w-[140px]">
            <img src="/images/partners/1.svg" />
          </div>
          <div className="w-[140px]">
            <img src="/images/partners/2.svg" />
          </div>
          <div className="w-[140px]">
            <img src="/images/partners/3.svg" />
          </div>
          <div className="w-[140px]">
            <img src="/images/partners/4.svg" />
          </div>
          <div className="w-[140px]">
            <img src="/images/partners/5.svg" />
          </div>
          <div className="w-[140px]">
            <img src="/images/partners/6.svg" />
          </div>
          <div className="w-[140px]">
            <img src="/images/partners/7.svg" />
          </div>
        </div>
        <div className="absolute inset-0 opacity-100 mix-blend-overlay bg-gradient-to-r from-[#349343] via-[#ff6347] to-[#ffdc00]"></div>
      </div>
    </div>
  );
};

export default Introduction;
