import { useState } from "react";
import Header from "../components/Header";
import de from "../components/de.json";
import eng from "../components/eng.json";
import myPhoto5 from "../resource/images/myPhoto5.png";

interface HomeProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
  hamburger: boolean;
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>;
}

function Home({ language, setLanguage }: HomeProps) {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${myPhoto5})`,
        backgroundPosition: " 100% 100%",
        backgroundSize: "45vw",
        backgroundRepeat: "no-repeat",
      }}
      className={`md:h-[100vh] text-white  z-0 md:font-400 font-300 ${
        hamburger ? "bg-slate-300" : "bg-[#100c18]"
      }`}
    >
      <Header
        language={language}
        setLanguage={setLanguage}
        hamburger={hamburger}
        setHamburger={setHamburger}
      />
      <main className={`flex`}>
        <section className=" w-[50vw] md:mt-[38vh] my-44 ml-24 font-[Neuemachina,sans-serif]">
          <h1
            className=" md:text-6xl text-xl h-20 md:mb-8 mb-0 mt-20 text-slate-200/100 font-serif tracking-wide animate__animated overflow-hidden border-r-orange-500 whitespace-nowrap"
            style={{ animationDuration: "2s" }}
          >
            {language ? eng.title : de.title}
          </h1>
          <h4 className=" mb-11 md:text-lg text-xs font-light tracking-wide w-[45vw]">
            {language ? eng.subtitle : de.subtitle}
          </h4>
        </section>
      </main>
    </div>
  );
}

export default Home;
