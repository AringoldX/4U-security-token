import { useState } from "react";
import { Link } from "react-router-dom";
import ConnectButton from "../../provider/ConnectButton";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToSecurity = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e, 'security');
  };

  const scrollToWhite = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e, 'white');
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e, 'about');
  };

  return (
    <header className="w-full text-[18px] uppercase font-bold fixed z-[999] pt-[22px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="px-5">
          <div className="flex justify-between items-center space-x-2 h-[94px] pl-7 pr-[57px] rounded-[22px] bg-[rgba(255,255,255,.05)] backdrop-blur-[46.4px]">
            <Link className="flex justify-between items-center" to="/">
              <img className="flex h-[94px]" src="/images/logo.png" />
              <div className="font-bold bg-gradient-to-r from-[#ec2cec] via-[#e7e0e0] to-[#15c285] bg-clip-text text-transparent text-[24px] 1md:text-[36px] 1lg:hidden">
                4U Security Token
              </div>
              <img
                className="flex h-[30px] w-auto 1lg:hidden"
                src="/images/ham.svg"
                onClick={() => setOpenMenu(!openMenu)}
              />
            </Link>
            <div className="hidden 1lg:flex space-x-5">
              <a href="#home">home</a>
              <Link to="/staking">staking</Link>
              <a href="#security" onClick={scrollToSecurity}>security & trust</a>
              <a href="#white" onClick={scrollToWhite}>white paper</a>
              <a href="#about" onClick={scrollToAbout}>about</a>
            </div>
            <div className="hidden 1lg:flex items-center">
              <ConnectButton />
              <Link
                to="https://t.me/thisis4ufinance"
                className="flex justify-center items-center w-[36px] h-[36px] border border-white rounded-full ml-[22px]"
              >
                <img src="/images/telegram.svg" />
              </Link>
              <Link
                to="https://twitter.com/4ufinance"
                className="flex justify-center items-center w-[36px] h-[36px] border border-white rounded-full ml-[14px]"
              >
                <img src="/images/twitter.svg" />
              </Link>
            </div>
          </div>
          {openMenu && (
            <div className="flex lg:hidden flex-col space-y-5 p-5 absolute top-full right-0 w-full rounded-sm z-[2] shadow-xl bg-[rgba(255,255,255,.05)] backdrop-blur-[46.4px]">
              <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-col space-y-5">
                  <Link to="/">home</Link>
                  <Link to="/staking">staking</Link>
                  <a href="#security">security & trust</a>
                  <a href="#white">white paper</a>
                  <a href="#about">about</a>
                </div>
                <ConnectButton />
                <div className="flex items-center">
                  <Link
                    to="https://t.me/thisis4ufinance"
                    className="flex justify-center items-center w-[36px] h-[36px] border border-white rounded-full"
                  >
                    <img src="/images/telegram.svg" />
                  </Link>
                  <Link
                    to="https://twitter.com/4ufinance"
                    className="flex justify-center items-center w-[36px] h-[36px] border border-white rounded-full ml-[14px]"
                  >
                    <img src="/images/twitter.svg" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
