import React from "react";
import "animate.css/animate.min.css";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface Page4Props {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Page4({ language }: Page4Props) {
  return (
    <div>
      <header className="flex justify-start py-16 px-20">
        <h2
          className="text-5xl h-20 font-bold tracking-wider font-serif mb-[2vh] animate__animated overflow-hidden"
          style={{ animationDuration: "3s" }}
        >
          {language ? eng.experianceTitle : de.experianceTitle}
        </h2>
      </header>
      <main className="flex flex-col justify-center items-center gap-10">
        {language
          ? eng.experiances.map((experiance) => {
              return (
                <div className=" w-[60vw]">
                  <h3 className="border-t-2 pt-8 text-3xl font-serif ">
                    {experiance.title}
                  </h3>
                  <h3 className="pt-2 text-xl mb-4 font-serif ">
                    {experiance.company}
                  </h3>
                  <span className="italic font-bold">{experiance.date}</span>
                  <p className=" mt-4 mb-4">{experiance.contain}</p>
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

export default Page4;
