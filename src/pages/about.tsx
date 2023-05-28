import React from "react";
import codingMan from "../resource/images/codingMan.jpg";
import "animate.css";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface AboutProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function About({ language }: AboutProps) {
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
      <div className=" flex flex-col items-center text-center bg-slate-50 md:w-[70vw] w-[90vw] px-8">
        <span className=" py-10 tracking-wider text-slate-800 font-bold md:text-2xl text-lg">
          {language ? eng.aboutMySelfTitle : de.aboutMySelfTitle}
        </span>
        <h2 className=" md:text-2xl text-xs leading-extra-loose">
          {language ? eng.aboutMySelf : de.aboutMySelf}
        </h2>
        <a
          className="md:w-[20vw] w-40 px-7 md:py-5 py-2 border m-10 tracking-wide font-bold bg-[#100c18] text-slate-50 md:text-base text-[8px] hvr-sweep-to-right animate__animated animate__fadeInLeft transition-all"
          download="Lebenslauf.pdf"
          href="/Lebenslauf.pdf"
        >
          {language ? eng.downloadButton : de.downloadButton}
        </a>
        <div className=" border border-slate-600 w-[60vw]" />
        <span className=" py-4 font-bold tracking-wide text-xl ">
          {language ? eng.skills : de.skills}
        </span>
        <ul className="md:flex justify-center grid grid-cols-3 gap-4 w-[60vw] flex-wrap py-7 md:text-lg text-[8px]">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className=" md:w-[10vw] w-[20vw] p-2 hvr-shutter-out-vertical transition-all cursor-pointer hover:font-bold"
              >
                {skill}
              </li>
            );
          })}
        </ul>
        <p className="w-[60vw] py-5 md:text-base text-xs">
          {language ? eng.infoBottom1 : de.infoBottom1}
        </p>
      </div>
    </section>
  );
}

export default About;
