import React from 'react';
import codingMan1 from '../resource/images/codingMan1.jpg';

function Page5() {
  return (
    <div
      style={{
        backgroundImage: `url(${codingMan1})`,
        backgroundPosition: 'bottom left',
        backgroundSize: '45vw',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex justify-between items-center bg-slate-700 py-36 mt-2"
    >
      <section className="w-[40vw]"></section>
      <section className=" flex justify-between w-[50vw] pr-5 tracking-wide leading-extra-loose mt-6">
        <p className="text-[#fff] text-[1.1rem]">
          Although I have experience in frontend development, I am not satisfied
          with just that. I constantly work on improving myself and keeping up
          with new technologies, frameworks, and all the latest developments in
          web technologies. Currently, I am diving deeper into the MERN stack
          alongside frontend development. My goal is to acquire more knowledge
          in the shortest possible time and apply this knowledge in my work to
          provide more value to the companies I work for. To achieve this goal,
          I am always striving to improve my learning process and dedicate time
          to staying up-to-date with the latest technologies. While learning
          about new developments, I also work to keep my current knowledge
          up-to-date. In particular, I am focusing on the MERN stack for backend
          development, with the aim of becoming an expert in full-stack
          development. This way, I can seamlessly work on both the frontend and
          backend of any project.
        </p>
      </section>
    </div>
  );
}

export default Page5;
