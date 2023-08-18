import React, { useEffect, useState } from 'react';
import 'animate.css/animate.min.css';
import de from '../components/de.json';
import eng from '../components/eng.json';
import { motion } from 'framer-motion';

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
    y: 30,
  },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

interface LanguagesProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Languages({ language }: LanguagesProps) {
  const [click, setClick] = useState('Deutsch');

  function handleClick(language: any) {
    setClick(language);
  }
  const content1 =
    eng.languageContain[click as keyof typeof eng.languageContain];
  const content2 = de.languageContain[click as keyof typeof de.languageContain];

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 800;
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
    <div className="py-10 bg-[#100c18] border-t-2">
      <header className=" flex md:pl-20 justify-center">
        <h2 className=" md:text-4xl text-xl font-bold mb-8 tracking-wider typewrite whitespace-nowrap text-slate-100">
          {language ? eng.languagesTitle : de.languagesTitle}
        </h2>
      </header>
      <main className=" md:flex justify-around grid grid-col p-6 ">
        <div className=" md:w-[40vw] w-[90vw] bg-slate-100">
          <ul
            className={` flex flex-col justify-center items-center md:py-10 py-3 text-[#000] md:text-3xl text-base md:gap-6 ${
              isAnimated ? 'animate__animated animate__fadeInLeft' : ''
            }`}
          >
            {language
              ? eng.languages.map((language, index) => {
                  return (
                    <motion.li
                      variants={variants}
                      initial="hidden"
                      animate="show"
                      key={index}
                      onClick={() => handleClick(language)}
                      className={`tracking-wider cursor-pointer typewrite  ${
                        click === language
                          ? 'hover:text-[#000] active:text-[#000] pb-1 font-bold text-[#020202]} '
                          : ''
                      }`}
                    >
                      {language}
                    </motion.li>
                  );
                })
              : de.languages.map((language, index) => {
                  return (
                    <motion.li
                      variants={variants}
                      initial="hidden"
                      animate="show"
                      key={index}
                      onClick={() => handleClick(language)}
                      className={`tracking-wider cursor-pointer font-serif ${
                        click === language
                          ? 'hover:text-[#000] active:text-[#000] pb-1 font-bold text-[#020202]} '
                          : ''
                      }`}
                    >
                      {language}
                    </motion.li>
                  );
                })}
          </ul>
        </div>
        <div
          className={`md:w-[40vw] w-[90vw] md:leading-10 leading-6 md:text-xl text-xs text-center md:mt-0 mt-5 text-slate-100 ${
            isAnimated ? 'animate__animated animate__fadeInRight' : ''
          }`}
        >
          <p>{language ? content1 : content2}</p>
        </div>
      </main>
    </div>
  );
}

export default Languages;
