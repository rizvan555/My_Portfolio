import React from "react";
import codingMan from "../resource/images/codingMan.jpg";
import "animate.css";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface Page2Props {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Page2({ language }: Page2Props) {
  const skills = [
    "Html",
    "Css",
    "Grid",
    "Tailwind",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Material UI",
    "NodeJS",
    "Express",
    "MongoDB",
    "Material UI",
    "WordPress",
    "Git",
    "GitHub",
    "VSCode",
    "Figma",
  ];
  return (
    <section
      style={{
        backgroundImage: `url(${codingMan})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" flex justify-center items-center py-16"
    >
      <div className=" flex flex-col items-center text-center bg-slate-50 w-[70vw] px-8">
        <span className=" py-10 tracking-wider text-slate-800 font-bold text-2xl">
          {language ? eng.aboutMySelfTitle : de.aboutMySelfTitle}
        </span>
        <h2 className=" text-2xl leading-extra-loose">
          {language ? eng.aboutMySelf : de.aboutMySelf}
        </h2>
        <a
          className=" px-7 py-5 border m-10 tracking-wide font-bold bg-[#100c18] text-slate-50 text-m hvr-sweep-to-right animate__animated animate__fadeInLeft transition-all"
          download="Lebenslauf.pdf"
          href="/Lebenslauf.pdf"
        >
          {language ? eng.downloadButton : de.downloadButton}
        </a>
        <div className=" border border-slate-600 w-[60vw]" />
        <span className=" py-4 font-bold tracking-wide text-xl">
          {language ? eng.skills : de.skills}
        </span>
        <ul className="flex justify-center gap-4 w-[60vw] flex-wrap py-7">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className=" w-[10vw] p-2 hvr-shutter-out-vertical transition-all cursor-pointer hover:font-bold"
              >
                {skill}
              </li>
            );
          })}
        </ul>
        <p className="w-[60vw] py-5">
          {language ? eng.infoBottom1 : de.infoBottom1}
        </p>
      </div>
    </section>
  );
}

export default Page2;
