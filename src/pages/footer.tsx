import React from 'react';
import SocialMedia from '../components/socialMedia';

function Footer() {
  const inputContainer = [
    {
      type: 'text',
      placheholder: 'Your Name',
    },
    {
      type: 'email',
      placheholder: 'Email',
    },
    {
      type: 'text',
      placheholder: 'Subject',
    },
  ];

  return (
    <div className="flex justify-center bg-slate-700 h-[100vh] p-6 flex-col">
      <h3 className="w-[60vw] text-3xl text-slate-50 text-center">
        I’m a designer, based in San Francisco. Currently a freelancer. You can
        see my hobbies on @Jack-Co and some photos on me too
      </h3>
      <main className="flex justify-around">
        <section className="flex flex-col gap-7">
          <h3 className=" mt-20 text-slate-50 font-bold tracking-wider text-xl">
            DROP A LINE
          </h3>
          {inputContainer.map((input) => {
            return (
              <input
                className=" bg-transparent placeholder:text-slate-50 border-x-0 border-t-0 text-slate-50"
                type={input.type}
                placeholder={input.placheholder}
              />
            );
          })}
          <textarea
            className=" bg-transparent placeholder:text-slate-50 border-x-0 border-t-0 text-slate-50"
            placeholder="Message"
            id="message"
            cols={60}
            rows={4}
          ></textarea>
          <button className=" w-[20vw] p-4 text-slate-900 bg-slate-50 font-bold hvr-radial-out border">
            SEND MESSAGE
          </button>
        </section>
        <section className=" w-60 flex flex-col mt-20 text-slate-50">
          <h3 className="mb-10 font-bold tracking-wider text-xl">CONTACT ME</h3>
          <p className="mb-5">
            Erlenbacher Straße 8, 67659 Kaiserslautern
          </p>
          <p className="mb-5">
            +4917680358387
          </p>
          <p className="mb-10">
            karimovrizvan84@gmail.com
          </p>
          <section className="mb-14">
            <button
              className="border p-3 w-[20vw] hvr-radial-out"
              style={{ backgroundColor: 'transparent' }}
            >
              DOWNLOAD RESUME
            </button>
          </section>
          <SocialMedia />
        </section>
      </main>
    </div>
  );
}

export default Footer;
