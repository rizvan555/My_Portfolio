import React, { useState } from "react";
import "animate.css/animate.min.css";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface LanguagesProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Languages({ language }: LanguagesProps) {
  const [click, setClick] = useState("German");

  function handleClick(language: any) {
    setClick(language);
  }
  const content1 =
    eng.languageContain[click as keyof typeof eng.languageContain];
  const content2 = de.languageContain[click as keyof typeof de.languageContain];
  return (
    <div className="py-10 bg-[#100c18] border-t-2">
      <header className=" flex pl-20">
        <h2
          className=" md:text-4xl text-xl font-bold mb-8 tracking-wider font-serif animate__animated overflow-hidden whitespace-nowrap text-slate-100"
          style={{ animationDuration: "4s" }}
        >
          {language ? eng.languagesTitle : de.languagesTitle}
        </h2>
      </header>
      <main className=" md:flex justify-around grid grid-col p-6 ">
        <div className=" md:w-[40vw] w-[90vw] bg-slate-100">
          <ul className=" flex flex-col justify-center items-center md:py-10 py-3 text-[#000] md:text-3xl text-base md:gap-6">
            {language
              ? eng.languages.map((language, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleClick(language)}
                      className={`tracking-wider cursor-pointer font-serif ${
                        click === language
                          ? "hover:text-[#000] active:text-[#000] pb-1 font-bold text-[#020202]} "
                          : ""
                      }`}
                    >
                      {language}
                    </li>
                  );
                })
              : de.languages.map((language) => {
                  return (
                    <li
                      onClick={() => handleClick(language)}
                      className="mb-6 tracking-wider cursor-pointer font-serif text-slate-300 hover:text-[#000] active:text-[#000] hvr-underline-from-center pb-1"
                    >
                      {language}
                    </li>
                  );
                })}
          </ul>
        </div>
        <div className=" md:w-[40vw] w-[90vw] md:leading-10 leading-6 md:text-xl text-xs text-center md:mt-0 mt-5 text-slate-100">
          <p>{language ? content1 : content2}</p>
        </div>
      </main>
    </div>
  );
}

export default Languages;
