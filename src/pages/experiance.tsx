import React, { useEffect, useState } from 'react';
import 'animate.css/animate.min.css';
import de from '../components/de.json';
import eng from '../components/eng.json';

interface ExperienceProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Experience({ language }: ExperienceProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 1700;
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
    <div className="bg-[#100c18] text-slate-100  border-t-2">
      <header className="flex justify-start md:py-16 py-6 px-20">
        <h2
          className="text-center md:text-5xl text-xl md:h-20 h-6 font-bold tracking-wider typewrite md:mb-[2vh] mb-[2px] animate__animated overflow-hidden typewrite"
          style={{ animationDuration: '3s' }}
        >
          {language ? eng.experienceTitle : de.experienceTitle}
        </h2>
      </header>
      <main className="flex flex-col justify-center items-center md:gap-10 gap-y-2 pb-8 ">
        {language
          ? eng.experiences.map((experience, index) => {
              return (
                <div className=" w-[60vw]" key={index}>
                  <h3
                    className={` border-[#cd69f4] border-t-2 pt-8 md:text-3xl text-base typewrite ${
                      isAnimated ? 'animate__animated animate__fadeInLeft' : ''
                    }`}
                  >
                    {experience.title}
                  </h3>
                  <h3
                    className={`pt-2 md:text-xl text-[13px] mb-4 typewrite ${
                      isAnimated ? 'animate__animated animate__fadeInLeft' : ''
                    }`}
                  >
                    {experience.company}
                  </h3>
                  <span
                    className={`italic font-bold md:text-xl text-[11px] ${
                      isAnimated ? 'animate__animated animate__fadeInLeft' : ''
                    }`}
                  >
                    {experience.date}
                  </span>
                  <p
                    className={` my-4 md:text-base text-xs ${
                      isAnimated ? 'animate__animated animate__fadeInRight' : ''
                    }`}
                  >
                    {experience.contain}
                  </p>
                </div>
              );
            })
          : de.experiences.map((experience) => {
              return (
                <div className=" w-[60vw]">
                  <h3
                    className={`border-[#cd69f4] border-t-2 pt-8 md:text-3xl text-base typewrite ${
                      isAnimated ? 'animate__animated animate__fadeInLeft' : ''
                    }`}
                  >
                    {experience.title}
                  </h3>
                  <h3
                    className={`pt-2 md:text-xl text-[13px] mb-4 typewrite ${
                      isAnimated ? 'animate__animated animate__fadeInLeft' : ''
                    }`}
                  >
                    {experience.company}
                  </h3>
                  <p
                    className={`italic font-bold md:text-xl text-[11px] ${
                      isAnimated ? 'animate__animated animate__fadeInLeft' : ''
                    }`}
                  >
                    {experience.date}
                  </p>
                  <p
                    className={`my-4 md:text-base text-xs ${
                      isAnimated ? 'animate__animated animate__fadeInRight' : ''
                    }`}
                  >
                    {experience.contain}
                  </p>
                </div>
              );
            })}
      </main>
    </div>
  );
}

export default Experience;
