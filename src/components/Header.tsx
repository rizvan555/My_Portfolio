import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

interface HeaderProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ language, setLanguage }: HeaderProps) {
  const [hamburger, setHamburger] = useState(false);
  console.log(hamburger);

  return (
    <div>
      <header className="flex z-10 lg:bg-[rgba(0,0,0,0.8)] md:justify-between px-10 py-5 border border-b-[#cd69f4] border-x-0 font-[Neuemachina,sans-serif] fixed min-w-full">
        <div
          className=" font-bold md:text-3xl mr-16 text-lg w-[20vw] text-white md:animate__animated md:animate__jackInTheBox tracking-wide"
          style={{
            animationIterationCount: "infinite",
            animationDuration: "3s",
          }}
        >
          Rizvan K.
        </div>

        <div className="flex items-center gap-8 text-[18px] md:ml-0 ml-40">
          <Navbar
            language={language}
            setLanguage={setLanguage}
            hamburger={hamburger}
            setHamburger={setHamburger}
          />
          <select
            value={language ? "EN" : "DE"}
            onChange={() => setLanguage(!language)}
            className=" text-slate-500 bg-slate-300 md:w-20 w-6 rounded-full border-[#ce5ef8]"
          >
            <option value="EN">EN 🇺🇸</option>
            <option value="DE">DE 🇩🇪</option>
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
