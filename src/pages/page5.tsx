import React from "react";
import codingMan1 from "../resource/images/codingMan1.jpg";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface Page5Props {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Page5({ language }: Page5Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${codingMan1})`,
        backgroundPosition: "bottom left",
        backgroundSize: "45vw",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-between items-center bg-slate-700 py-36 mt-2"
    >
      <section className="w-[40vw]"></section>
      <section className=" flex justify-between w-[50vw] pr-5 tracking-wide leading-extra-loose mt-6">
        <p className="text-[#fff] text-[1.1rem]">
          {language ? eng.myInfo : de.myInfo}
        </p>
      </section>
    </div>
  );
}

export default Page5;
