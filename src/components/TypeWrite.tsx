import de from "../components/de.json";
import eng from "../components/eng.json";
import myPhoto5 from "../resource/images/myPhoto5.png";
import Typewriter from "react-ts-typewriter";
interface TypeWriteProps {
  language: boolean;
}
function myComponent({ language }: TypeWriteProps) {
  return (
    <main className={`flex relative`}>
      <section className=" md:w-[50vw] w-[80vw] md:mt-[38vh] my-44 md:ml-24 ml-10 font-[Neuemachina,sans-serif]">
        <h1 className="md:text-6xl w-full text-3xl h-20 md:mb-8 mb-0 mt-20 text-slate-200/100 font-serif tracking-wide animate__animated overflow-hidden border-r-orange-500 whitespace-nowrap">
          <Typewriter text={language ? eng.title : de.title} speed={100} />
        </h1>
        <h3 className="mb-11 md:text-lg text-base font-light tracking-wide md:w-[45vw]">
          <Typewriter text={language ? eng.subtitle : de.subtitle} />
        </h3>
        <div className="md:absolute bottom-0 right-0 md:block hidden">
          <img src={myPhoto5} alt="myPhoto5" width={650} height={650} />
        </div>
        <Typewriter
          speed={20}
          text={""}
          loop={true}
          random={100}
          cursor={false}
        />
      </section>
    </main>
  );
}
export default myComponent;
