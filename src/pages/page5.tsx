import React from 'react';
import developer from '../resource/images/developer.jpg';

function Page5() {
  return (
    <div
      style={{
        backgroundImage: `url(${developer})`,
        backgroundPosition: 'bottom left',
        backgroundSize: '55vw',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex justify-between items-center bg-slate-700 py-36 mt-16"
    >
      <section className="w-[40vw]"></section>
      <section className=" flex justify-between w-[40vw] pr-5 text-2xl tracking-wide leading-extra-loose mt-20">
        <p className="text-[#fff]">
          Recusandae esse assumenda obcaecati voluptatem ratione, exercitationem
          dolor vitae odit consequatur reiciendis placeat quas minus architecto
          nisi possimus sint, minima odio expedita sit blanditiis aliquid.
          Dolore tempora laboriosam voluptate.
        </p>
      </section>
    </div>
  );
}

export default Page5;
