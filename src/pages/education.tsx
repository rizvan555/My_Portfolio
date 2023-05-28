import React from "react";
import "animate.css/animate.min.css";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface EducationProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Education({ language }: EducationProps) {
  return (
    <div>
      <header className="flex justify-start py-16 px-20">
        <h2
          className="md:text-5xl text-xl h-20 font-bold tracking-wider font-serif md:mb-[2vh] -mb-16 animate__animated overflow-hidden"
          style={{ animationDuration: "3s" }}
        >
          {language ? eng.educationTitle : de.educationTitle}
        </h2>
      </header>
      <main className="flex flex-col justify-center items-center gap-10 mb-20">
        {language
          ? eng.educationExperiances.map((experiance, index) => {
              return (
                <div key={index} className=" w-[60vw]">
                  <h2 className="border-t-2 pt-8 md:text-4xl text-xl mb-4 font-serif">
                    {experiance.uniName}
                  </h2>
                  <h3 className="md:text-2xl mb-4 font-serif">
                    {experiance.title}
                  </h3>
                  <span className="md:text-lg text-[12px] ">
                    {experiance.date}
                  </span>
                  <p className=" mt-4 md:text-[17px] text-[10px]">
                    {experiance.contain}
                  </p>
                </div>
              );
            })
          : de.educationExperiances.map((experiance, index) => {
              return (
                <div key={index} className=" w-[60vw]">
                  <h2 className="border-t-2 pt-8 text-4xl mb-4 font-serif">
                    {experiance.uniName}
                  </h2>
                  <h3 className="text-2xl mb-4 font-serif">
                    {experiance.title}
                  </h3>
                  <span>{experiance.date}</span>
                  <p className=" mt-4">{experiance.contain}</p>
                </div>
              );
            })}
      </main>
    </div>
  );
}

export default Education;
