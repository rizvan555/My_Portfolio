import Header from "../components/Header";
import TypeWrite from "../components/TypeWrite";

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
      <TypeWrite language={language} />
    </div>
  );
}

export default Home;
