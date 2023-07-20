import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navbar from './Navbar';

interface HeaderProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
  hamburger: boolean;
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({
  language,
  setLanguage,
  hamburger,
  setHamburger,
}: HeaderProps) {
  return (
    <div>
      <header className="flex items-center z-10 md:bg-[rgba(0,0,0,0.8)] md:justify-between px-10 py-5 border border-b-[#cd69f4] border-x-0 font-[Neuemachina,sans-serif] md:fixed min-w-full">
        <div
          className=" font-bold md:text-3xl text-lg mr-16  md:w-[20vw] w-[30vw] text-white md:animate__animated md:animate__jackInTheBox tracking-wide"
          style={{
            animationIterationCount: 'infinite',
            animationDuration: '3s',
          }}
        >
          Rizvan K.
        </div>

        <div className="flex items-center gap-8 text-[16px] md:ml-0 ml-12">
          <Navbar
            language={language}
            setLanguage={setLanguage}
            hamburger={hamburger}
            setHamburger={setHamburger}
          />
          <select
            value={language ? 'DE' : 'EN'}
            onChange={() => setLanguage(!language)}
            className=" text-slate-500 text-[12px] bg-slate-300 md:w-16 w-6 rounded-full border-[#ce5ef8] px-3 py-1"
          >
            <option value="DE">DE 🇩🇪</option>
            <option value="EN">EN 🇬🇧</option>
          </select>

          <button
            className="lg:hidden flex"
            onClick={() => setHamburger(!hamburger)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
