import React, { useEffect, useState } from 'react';
import codingMan from '../resource/images/codingMan.jpg';
import 'animate.css';
import de from '../components/de.json';
import eng from '../components/eng.json';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

interface AboutProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function About({ language }: AboutProps) {
  const skills = [
    'Html',
    'Css',
    'Grid',
    'Tailwind',
    'Bootstrap',
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'NextJS',
    'Material UI',
    'NodeJS',
    'Express',
    'MongoDB',
    'Postman',
    'Jest Testing',
    'Material UI',
    'WordPress',
    'Git',
    'GitHub',
    'VSCode',
    'Figma',
  ];
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 100;
      if (window.scrollY > scrollHeight) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${codingMan})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className=" flex justify-center items-center py-16  border-t-2 "
    >
      <div
        className={`flex flex-col items-center text-center bg-[#100c18] md:w-[70vw] w-[90vw] px-8 ${
          isAnimated ? 'animate__animated animate__fadeInLeft' : ''
        } transition-all`}
      >
        <span className=" py-10 tracking-wider text-slate-100 font-bold md:text-2xl text-lg">
          {language ? eng.aboutMySelfTitle : de.aboutMySelfTitle}
        </span>
        <h2 className=" md:text-2xl text-xs leading-extra-loose text-slate-100">
          {language ? eng.aboutMySelf : de.aboutMySelf}
        </h2>
        <a
          className="md:w-[25vw] w-40 px-7 md:py-5 py-2 border m-10 border-[#cd69f4] tracking-wide font-bold bg-[#100c18] text-slate-100 md:text-base text-[8px] hvr-sweep-to-right animate__animated animate__fadeInLeft transition-all"
          download="Lebenslauf.pdf"
          href="/Lebenslauf.pdf"
        >
          {language ? eng.downloadButton : de.downloadButton}
        </a>
        <div className=" border border-slate-600 w-[60vw]" />
        <span className=" py-4 font-bold tracking-wide text-xl text-slate-100">
          {language ? eng.skills : de.skills}
        </span>
        <ul className="md:flex justify-center grid grid-cols-3 gap-4 w-[60vw] flex-wrap py-7 md:text-lg text-[8px]">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className=" md:w-[10vw] w-[20vw] p-2 hvr-shutter-out-vertical transition-all cursor-pointer hover:font-bold border border-[#cd69f4] text-slate-100"
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
