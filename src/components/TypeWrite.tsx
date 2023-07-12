import de from '../components/de.json';
import eng from '../components/eng.json';
import myNewPhoto from '../resource/images/myNewPhoto.png';
import Typewriter from 'typewriter-effect';

interface TypeWriteProps {
  language: boolean;
}

function TypeWrite({ language }: TypeWriteProps) {
  return (
    <main className="flex relative">
      <section className=" md:w-[65vw] w-[80vw] md:mt-[38vh] my-44 md:ml-12 ml-10 font-[Neuemachina,sans-serif]">
        <h1 className="md:text-5xl w-full text-3xl md:mb-8 mb-0 mt-20 text-slate-200/100 font-serif tracking-wide animate__animated overflow-hidden border-r-orange-500 whitespace-nowrap flex gap-4 h-20">
          <p className="text-[#c555f4] ">
            <span className="text-slate-100 ">{language ? eng.me : de.me}</span>
            &nbsp;
            <span className="text-[#c555f4]">
              {language ? eng.me1 : de.me1}
            </span>
          </p>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 150,
              deleteSpeed: 100,
            }}
          />
        </h1>
        <h3 className="mb-11 md:text-xl text-base font-light tracking-wide md:w-[55vw] text-[#c555f4]">
          <Typewriter
            options={{
              strings: [
                language ? eng.subtitle : de.subtitle,
                language ? eng.subtitle1 : de.subtitle1,
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 2,
            }}
          />
        </h3>
        <div className="md:absolute bottom-10 right-0 md:block hidden">
          <img src={myNewPhoto} alt="myPhoto5" width={450} height={450} />
        </div>
      </section>
    </main>
  );
}

export default TypeWrite;
