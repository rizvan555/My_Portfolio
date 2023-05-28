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

function Home({ language, setLanguage, hamburger, setHamburger }: HomeProps) {
  return (
    <div
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
      <main className={`flex relative`}>
        <section className=" md:w-[50vw] w-[80vw] md:mt-[38vh] my-44 ml-24 font-[Neuemachina,sans-serif]">
          <h1
            className="md:text-6xl text-4xl h-20 md:mb-8 mb-0 mt-20 text-slate-200/100 font-serif tracking-wide animate__animated overflow-hidden border-r-orange-500 whitespace-nowrap"
            style={{ animationDuration: "2s" }}
          >
            {language ? eng.title : de.title}
          </h1>
          <h4 className=" mb-11 md:text-lg text-base font-light tracking-wide md:w-[45vw]">
            {language ? eng.subtitle : de.subtitle}
          </h4>
        </section>
        <div className="md:absolute bottom-0 right-0 md:block hidden">
          <img src={myPhoto5} alt="myPhoto5" width={650} height={650} />
        </div>
      </main>
    </div>
  );
}

export default Home;
