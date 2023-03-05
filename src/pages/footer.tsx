import React from 'react';

function Footer() {
  return (
    <div className="flex justify-center bg-slate-700 h-[100vh] p-6 flex-col">
      <h3 className="w-[60vw] text-3xl text-slate-50 text-center">
        I’m a designer, based in San Francisco. Currently a freelancer. You can
        see my hobbies on @Jack-Co and some photos on me too
      </h3>
      <main className="flex justify-around">
        <section className="">
          <h3>DROP A LINE</h3>
        </section>
        <section className=" w-60 flex flex-col">
          <h3 className="mb-6">CONTACT ME</h3>
          <a href="#" className="mb-2">
            Erlenbacher Straße 8, 67659 Kaiserslautern
          </a>
          <a href="#" className="mb-2">
            +4917680358387
          </a>
          <a href="#" className="mb-6">
            karimovrizvan84@gmail.com
          </a>
          <section className='mb-6'>
            <button>DOWNLOAD RESUME</button>
          </section>
          <div className="flex gap-3">
            <a href="">Fac</a>
            <a href="">Ins</a>
            <a href="">Lin</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Footer;
