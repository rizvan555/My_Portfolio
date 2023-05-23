import myPhoto5 from "../resource/images/myPhoto5.png";
import de from "../components/de.json";
import eng from "../components/eng.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

interface Page1Props {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Page1({ language, setLanguage }: Page1Props) {
  const handleScrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const handleScrollProjectsEng = () => {
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  };
  const handleScrollProjectsde = () => {
    window.scrollTo({
      top: 5200,
      behavior: "smooth",
    });
  };
  const handleScrollBlogEng = () => {
    window.scrollTo({
      top: 3500,
      behavior: "smooth",
    });
  };
  const handleScrollBlogDe = () => {
    window.scrollTo({
      top: 3630,
      behavior: "smooth",
    });
  };
  const handleScrollContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const [hamburger, setHamburger] = useState(true);

  return (
    <div
      style={{
        backgroundImage: `url(${myPhoto5})`,
        backgroundPosition: " 100% 100%",
        backgroundSize: "50vw",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[100vh] bg-[#100c18] z-0 text-white md:font-400 font-300"
    >
      <header className="flex z-10 bg-[rgba(0,0,0,0.8)] md:justify-between justify-start px-10 py-5 border border-b-[#cd69f4] border-x-0 font-[Neuemachina,sans-serif] fixed min-w-full">
        <h2
          className=" font-bold md:text-3xl mr-16 text-xs text-white animate__animated animate__jackInTheBox tracking-wide"
          style={{
            animationIterationCount: "infinite",
            animationDuration: "3s",
          }}
        >
          Rizvan K.
        </h2>
        <nav className="flex items-center gap-8 text-[18px]">
          <ul className="lg:flex gap-14 cursor-pointer animate__animated animate__lightSpeedInRight hidden">
            {language
              ? eng.navbar.map((nav, index) => {
                  if (nav === "About") {
                    return (
                      <li
                        key={index}
                        className=" hvr-outline-in pb-1 hover:text-white tracking-wide"
                        onClick={handleScrollAbout}
                      >
                        {nav}
                      </li>
                    );
                  } else if (nav === "Projects" || nav === "Projekte") {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                        onClick={handleScrollProjectsEng}
                      >
                        {nav}
                      </li>
                    );
                  } else if (nav === "Blog") {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                        onClick={handleScrollBlogEng}
                      >
                        {nav}
                      </li>
                    );
                  } else if (nav === "Contact" || nav === "Kontakt") {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                        onClick={handleScrollContact}
                      >
                        {nav}
                      </li>
                    );
                  } else if (nav === "Home" || nav === "Startseite") {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                        onClick={handleScrollHome}
                      >
                        {nav}
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white "
                      >
                        {nav}
                      </li>
                    );
                  }
                })
              : de.navbar.map((nav, index) => {
                  if (nav === "About" || nav === "Über mich") {
                    return (
                      <li
                        key={index}
                        className=" hvr-outline-in pb-1 hover:text-white tracking-wide"
                        onClick={handleScrollAbout}
                      >
                        {nav}
                      </li>
                    );
                  } else if (nav === "Projects" || nav === "Projekte") {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                        onClick={handleScrollProjectsde}
                      >
                        {nav}
                      </li>
                    );
                  } else if (nav === "Blog") {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                        onClick={handleScrollBlogDe}
                      >
                        {nav}
                      </li>
                    );
                  } else if (nav === "Contact" || nav === "Kontakt") {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                        onClick={handleScrollContact}
                      >
                        {nav}
                      </li>
                    );
                  } else if (nav === "Home" || nav === "Startseite") {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                        onClick={handleScrollHome}
                      >
                        {nav}
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={index}
                        className=" tracking-wide hvr-outline-in pb-1 hover:text-white "
                      >
                        {nav}
                      </li>
                    );
                  }
                })}
          </ul>

          <select
            value={language ? "EN" : "DE"}
            onChange={() => setLanguage(!language)}
            className=" text-slate-500 bg-slate-300 md:w-20 w-6 rounded-full border-[#ce5ef8]"
          >
            <option value="EN">EN 🇺🇸</option>
            <option value="DE">DE 🇩🇪</option>
          </select>
          <button
            className="lg:hidden flex"
            onClick={() => setHamburger(!hamburger)}
          >
            <GiHamburgerMenu />
          </button>
        </nav>
      </header>
      <main className=" flex">
        <section className=" w-[50vw] mt-[38vh] ml-24 font-[Neuemachina,sans-serif]">
          <h1
            className=" md:text-6xl text-xl mb-8 text-slate-200/100 font-serif tracking-wide animate__animated overflow-hidden border-r-orange-500 whitespace-nowrap"
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

export default Page1;
