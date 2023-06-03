import React from "react";
import codingMan1 from "../resource/images/codingMan1.jpg";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface BlogProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Blog({ language }: BlogProps) {
  return (
    <div className="  border-t-2 md:flex grid grid-col justify-between items-center bg-[#100c18] md:py-8 pb-10">
      <section className="md:w-[40vw]">
        <img src={codingMan1} alt="coding-man" />
      </section>
      <section className=" flex md:w-[50vw] w-[80vw] mx-auto pr-5 tracking-wider leading-extra-loose md:mt-6 mt-10">
        <p className="text-[#fff] md:text-[1.1rem] text-xs ">
          {language ? eng.myInfo : de.myInfo}
        </p>
      </section>
    </div>
  );
}

export default Blog;
