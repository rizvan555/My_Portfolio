import React, { useState } from "react";
import "animate.css/animate.min.css";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface Page3Props {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Page3({ language }: Page3Props) {
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
      <main className=" flex justify-around p-6">
        <div className=" w-[40vw] bg-slate-800">
          <ul className=" flex flex-col justify-center items-center py-10 text-[#fff] text-3xl">
            {language
              ? eng.languages.map((language) => {
                  return (
                    <li
                      onClick={() => handleClick(language)}
                      className="mb-6 tracking-wider cursor-pointer font-serif text-slate-300 hover:text-[#fff] active:text-[#fff] hvr-underline-from-center pb-1"
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
        <div className=" w-[40vw] leading-10 text-xl">
          <p>{language ? content1 : content2}</p>
        </div>
      </main>
    </div>
  );
}

export default Page3;
