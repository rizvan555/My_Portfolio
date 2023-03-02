import React from 'react';
import myPhoto from '../resource/images/myPhoto.png';

function Page1() {
  const navbar = ['Home', 'About', 'Projects', 'Contact', 'Fire me an Email'];

  return (
    <div className="h-[100vh] bg-slate-800 text-slate-200/70">
      <header className="flex justify-between px-8 py-5 border border-slate-700">
        <h2 className=" font-bold text-xl text-slate-200/100">Rizvan K.</h2>
        <nav>
          <ul className="flex gap-14 cursor-pointer">
            {navbar.map((nav) => {
              return (
                <li className=" last-of-type:underline last-of-type:text-slate-200/90 hvr-underline-from-center pb-1">
                  {nav}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main className=" flex items-center p-5 justify-around">
        <section className=" w-[40vw]">
          <h1 className=" text-5xl mb-4 text-slate-200/100 font-serif">
            Full Stack Developer
          </h1>
          <h4 className=" mb-10 text-lg font-light">
            I'm a MERN full stack developer with a passion for web development.
            I'm dedicated to constantly learning and improving my skills.
          </h4>
          <button className=" border border-slate-500/60 w-36 p-4 text-xs font-bold hvr-bounce-to-right">
            HIRE ME
          </button>
        </section>
        <section>
          <img src={myPhoto} alt="my-photo" className=" rounded-full z-10" />
        </section>
      </main>
    </div>
  );
}

export default Page1;
