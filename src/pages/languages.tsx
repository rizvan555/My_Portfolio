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
    <div className=" py-10">
      <header className=" flex pl-20">
        <h2
          className=" text-4xl font-bold mb-8 tracking-wider font-serif animate__animated overflow-hidden whitespace-nowrap "
          style={{ animationDuration: "4s" }}
        >
          {language ? eng.languagesTitle : de.languagesTitle}
        </h2>
      </header>
      <main className=" md:flex justify-around grid grid-col p-6">
        <div className=" md:w-[40vw] w-[90vw] bg-[#100c18]">
          <ul className=" flex flex-col justify-center items-center md:py-10 py-3 text-[#fff] md:text-3xl text-base">
            {language
              ? eng.languages.map((language, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleClick(language)}
                      className=" tracking-wider cursor-pointer font-serif text-slate-300 hover:text-[#fff] active:text-[#fff] hvr-underline-from-center transition-all pb-1"
                    >
                      {language}
                    </li>
                  );
                })
              : de.languages.map((language) => {
                  return (
                    <li
                      onClick={() => handleClick(language)}
                      className="mb-6 tracking-wider cursor-pointer font-serif text-slate-300 hover:text-[#fff] active:text-[#fff] hvr-underline-from-center pb-1"
                    >
                      {language}
                    </li>
                  );
                })}
          </ul>
        </div>
        <div className=" md:w-[40vw] w-[90vw] md:leading-10 leading-6 md:text-xl text-xs text-center">
          <p>{language ? content1 : content2}</p>
        </div>
      </main>
    </div>
  );
}

export default Languages;
