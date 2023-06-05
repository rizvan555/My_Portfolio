import React from "react";
import de from "../components/de.json";
import eng from "../components/eng.json";
import { GiCancel } from "react-icons/gi";

interface NavbarProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
  hamburger: boolean;
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>;
}
function Navbar({ language, hamburger, setHamburger }: NavbarProps) {
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
  const handleScrollAboutDe = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const handleScrollProjectsEng = () => {
    window.scrollTo({
      top: 4400,
      behavior: "smooth",
    });
  };
  const handleScrollProjectsde = () => {
    window.scrollTo({
      top: 4550,
      behavior: "smooth",
    });
  };
  const handleScrollBlogEng = () => {
    window.scrollTo({
      top: 3700,
      behavior: "smooth",
    });
  };
  const handleScrollBlogDe = () => {
    window.scrollTo({
      top: 3850,
      behavior: "smooth",
    });
  };
  const handleScrollContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <ul
      className={`md:flex grid grid-cols-1 md:static absolute top-0 right-0 md:p-0 p-20 md:gap-14 gap-20 text-center ${
        hamburger ? "block" : "hidden"
      }  md:bg-transparent bg-slate-200 w-full md:text-white text-black cursor-pointer md:animate__animated animate__lightSpeedInRight transition-all`}
    >
      <button
        className="absolute top-10 right-10 "
        onClick={() => setHamburger(!hamburger)}
      >
        <GiCancel size={30} className="hover:text-primary md:hidden" />
      </button>
      {language
        ? eng.navbar.map((nav, index) => {
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
  );
}

export default Navbar;
