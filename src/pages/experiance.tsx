import React from "react";
import "animate.css/animate.min.css";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface ExperianceProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Experiance({ language }: ExperianceProps) {
  return (
    <div>
      <header className="flex justify-start py-16 px-20">
        <h2
          className="md:text-5xl text-xl md:h-20 h-6 font-bold tracking-wider font-serif md:mb-[2vh] mb-[2px] animate__animated overflow-hidden"
          style={{ animationDuration: "3s" }}
        >
          {language ? eng.experianceTitle : de.experianceTitle}
        </h2>
      </header>
      <main className="flex flex-col justify-center items-center md:gap-10 gap-y-2">
        {language
          ? eng.experiances.map((experiance, index) => {
              return (
                <div className=" w-[60vw]" key={index}>
                  <h3 className="border-t-2 pt-8 md:text-3xl text-base font-serif ">
                    {experiance.title}
                  </h3>
                  <h3 className="pt-2 md:text-xl text-[13px] mb-4 font-serif ">
                    {experiance.company}
                  </h3>
                  <span className="italic font-bold md:text-xl text-[11px]">
                    {experiance.date}
                  </span>
                  <p className=" mt-4 mb-4 md:text-base text-xs">
                    {experiance.contain}
                  </p>
                </div>
              );
            })
          : de.experiances.map((experiance) => {
              return (
                <div className=" w-[60vw]">
                  <h3 className="border-t-2 pt-8 text-3xl font-serif ">
                    {experiance.title}
                  </h3>
                  <h3 className="pt-2 text-xl mb-4 font-serif ">
                    {experiance.company}
                  </h3>
                  <span className="italic font-bold">{experiance.date}</span>
                  <p className=" mt-4 mb-8">{experiance.contain}</p>
                </div>
              );
            })}
      </main>
    </div>
  );
}

export default Experiance;
