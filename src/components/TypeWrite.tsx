import de from '../components/de.json';
import eng from '../components/eng.json';
import myNewPhoto from '../resource/images/myNewPhoto.png';
import Typewriter from 'typewriter-effect';

interface TypeWriteProps {
  language: boolean;
}

function TypeWrite({ language }: TypeWriteProps) {
  return (
    <main className="flex relative typewrite ">
      <section className=" md:w-[65vw] w-[82vw] md:mt-[38vh] my-44  md:ml-12 ml-8">
        <h1 className="md:text-5xl w-full text-4xl md:mb-8 mb-0 md:mt-10 mt-0 text-slate-200/100 font-serif tracking-wide animate__animated overflow-hidden border-r-orange-500 whitespace-nowrap flex gap-4 md:h-20 h-36">
          <p className="text-[#c555f4]">
            <span className=" md:inline-flex flex text-slate-100 typewrite font-bold flex-wrap md:ml-0 ml-6">
              {language ? eng.me : de.me}
            </span>
            &nbsp;
            <span className="md:inline-flex flex text-[#c555f4] typewrite font-bold  md:flex-nowrap flex-wrap">
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
        <h3 className="mb-11 md:text-[18px] text-base font-light tracking-wide md:w-[60vw] w-[40wv] text-[#c555f4]">
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
          <img src={myNewPhoto} alt="myPhoto5" width={400} height={400} />
        </div>
      </section>
    </main>
  );
}

export default TypeWrite;
