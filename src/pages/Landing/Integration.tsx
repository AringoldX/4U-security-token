const Integration = () => {
    return (
    <div id="white" className="flex flex-col p-[60px] bg-[#021602] bg-[100%_auto] bg-no-repeat">
        <div className="flex flex-col max-w-[600px]">
            <div className="text-[30px]">
                Digital Identity
                <span className="ml-[5px] bg-gradient-to-r from-[#ec2cec] via-[#e7e0e0] to-[#15c285] bg-clip-text text-transparent">
                    Integration
                </span>
            </div>
            <div>
                Start the process by verifying users through blockchain-based KYC/AML, ensuring security and compliance.
            </div>
        </div>
        <div>
            <div className="border-b border-[#4d4949] h-[40px] mr-[8px]"></div>
            <div className="flex flex-row">
                <img className="h-[40px]" src="/images/arrow-none.png"/>
                <div className="w-[100%]"></div>
                <img className="h-[40px] mr-[2px]" src="/images/arrow-down.png"/>
            </div>
        </div>

        <div className="flex flex-row space-x-2 my-[20px] flex-wrap gap-x-10 gap-y-6">
            <div className="w-[150px]">
                <img src="/images/integrate-1.png" />
            </div>
            <div className="w-[150px]">
                <img src="/images/integrate-2.png" />
            </div>
            <div className="w-[150px]">
                <img src="/images/integrate-3.png" />
            </div>
            <div className="w-[150px]">
                <img src="/images/integrate-4.png" />
            </div>
            <div className="w-[150px]">
                <img src="/images/integrate-5.png" />
            </div>
            <div className="w-[150px]">
                <img src="/images/integrate-6.png" />
            </div>
        </div>
        <div>
            <div className="flex flex-row">
                <img className="h-[40px] mr-[2px]" src="/images/arrow-up.png"/>
                <div className="w-[100%]"></div>
                <img className="h-[40px]" src="/images/arrow-none.png"/>
                </div>
            <div className="border-t border-[#4d4949] h-[40px] ml-[8px]"></div>
        </div>
    </div>
    );
}

export default Integration;