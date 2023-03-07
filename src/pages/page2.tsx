import React from 'react';
import codingMan from '../resource/images/codingMan.jpg';

function Page2() {
  const skills = [
    'Html',
    'Css',
    'Grid',
    'Tailwind',
    'Bootstrap',
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'Material UI',
    'NodeJS',
    'Express',
    'Material UI',
    'Git',
    'GitHub',
    'VSCode',
  ];
  return (
    <section
      style={{
        backgroundImage: `url(${codingMan})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className=" flex justify-center items-center py-16"
    >
      <div className=" flex flex-col items-center text-center bg-slate-50 w-[70vw] px-8">
        <span className=" py-10 tracking-wider text-slate-800 font-bold">
          ABOUT MYSELF
        </span>
        <h2 className=" text-2xl leading-extra-loose">
          I am MERN full-stack developer, I have experience building web
          applications using MongoDB, Express, React, and Node.js. I am
          proficient in front-end development technologies such as HTML, CSS,
          and JavaScript, and I have worked with popular frameworks and
          libraries like React and Redux.
        </h2>
        <button className=" px-7 py-5 w- border m-10 tracking-wide font-bold  bg-slate-700 text-slate-50 text-m">
          DOWNLOAD RESUME
        </button>
        <div className=" border border-slate-600 w-[60vw]" />
        <span className=" py-4 font-bold tracking-wide text-xl">Skills</span>
        <ul className="flex justify-center gap-4 w-[60vw] flex-wrap py-7">
          {skills.map((skill) => {
            return (
              <li className=" w-[10vw] hvr-shutter-out-vertical cursor-pointer">
                {skill}
              </li>
            );
          })}
        </ul>
        <p className="w-[60vw] py-5">
          I am also experienced in back-end development with Node.js and have
          worked with various APIs and databases to build scalable and robust
          applications.
        </p>
      </div>
    </section>
  );
}

export default Page2;
