const Footer = () => {
  return (
    <footer className="flex w-full flex-col pc:flex-row pt-[20px] px-[60px] justify-between align-center">
      <div className="flex flex-row w-full">
        <div className="w-[120px] pc:pb-[60px]">
          <img src="/images/logo.png" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="mb-[20px]">
            Privacy Policy | Terms & Conditions | Regular Policy
          </div>
          <div className="text-[#786868] my-[10px]">
            © 2024 Brand Name. All rights reserved.
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2 w-full pc:w-[200px] pc:mt-[40px] justify-center">
        <div className="w-[60px] px-[10px]">
          <img src="/images/social-t.png" />
        </div>
        <div className="w-[60px] px-[10px]">
          <img src="/images/social-x.png" />
        </div>
        <div className="w-[60px] px-[10px]">
          <img src="/images/social-i.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
