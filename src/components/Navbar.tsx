import React from 'react';
import de from '../components/de.json';
import eng from '../components/eng.json';
import { GiCancel } from 'react-icons/gi';

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
      behavior: 'smooth',
    });
  };
  const handleScrollAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  const handleScrollAboutDe = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  const handleScrollProjectsEng = () => {
    window.scrollTo({
      top: 4700,
      behavior: 'smooth',
    });
  };
  const handleScrollProjectsde = () => {
    window.scrollTo({
      top: 4400,
      behavior: 'smooth',
    });
  };
  const handleScrollBlogEng = () => {
    window.scrollTo({
      top: 3950,
      behavior: 'smooth',
    });
  };
  const handleScrollBlogDe = () => {
    window.scrollTo({
      top: 3700,
      behavior: 'smooth',
    });
  };
  const handleScrollContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <ul
      className={`md:flex grid grid-cols-1 md:static absolute top-0 right-0 md:p-0 p-20 md:gap-10 gap-20 text-center typewrite ${
        hamburger ? 'block' : 'hidden'
      } z-50 leading-0 md:bg-transparent bg-slate-600 w-full md:text-white cursor-pointer md:animate__animated animate__lightSpeedInRight transition-all`}
    >
      <button
        className="absolute top-10 right-10"
        onClick={() => setHamburger(!hamburger)}
      >
        <GiCancel size={25} className="hover:text-primary md:hidden" />
      </button>
      {language
        ? eng.navbar.map((nav, index) => {
            if (nav === 'About' || nav === 'Über mich') {
              return (
                <li
                  key={index}
                  className=" hvr-outline-in md:w-[8vw] transition-all pb-1 hover:text-white tracking-wide"
                  onClick={handleScrollAbout}
                >
                  {nav}
                </li>
              );
            } else if (nav === 'Projects' || nav === 'Projekte') {
              return (
                <li
                  key={index}
                  className=" tracking-wide hvr-outline-in pb-1 hover:text-white md:w-[6vw]"
                  onClick={handleScrollProjectsEng}
                >
                  {nav}
                </li>
              );
            } else if (nav === 'Blog') {
              return (
                <li
                  key={index}
                  className=" tracking-wide hvr-outline-in pb-1 hover:text-white md:w-[5vw]"
                  onClick={handleScrollBlogEng}
                >
                  {nav}
                </li>
              );
            } else if (nav === 'Contact' || nav === 'Kontakt') {
              return (
                <li
                  key={index}
                  className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                  onClick={handleScrollContact}
                >
                  {nav}
                </li>
              );
            } else if (nav === 'Home' || nav === 'Startseite') {
              return (
                <li
                  key={index}
                  className=" tracking-wide hvr-outline-in pb-1 hover:text-white md:w-[7vw]"
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
            if (nav === 'About' || nav === 'Über mich') {
              return (
                <li
                  key={index}
                  className=" hvr-outline-in pb-1 hover:text-white tracking-wide"
                  onClick={handleScrollAboutDe}
                >
                  {nav}
                </li>
              );
            } else if (nav === 'Projects' || nav === 'Projekte') {
              return (
                <li
                  key={index}
                  className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                  onClick={handleScrollProjectsde}
                >
                  {nav}
                </li>
              );
            } else if (nav === 'Blog') {
              return (
                <li
                  key={index}
                  className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                  onClick={handleScrollBlogDe}
                >
                  {nav}
                </li>
              );
            } else if (nav === 'Contact' || nav === 'Kontakt') {
              return (
                <li
                  key={index}
                  className=" tracking-wide hvr-outline-in pb-1 hover:text-white"
                  onClick={handleScrollContact}
                >
                  {nav}
                </li>
              );
            } else if (nav === 'Home' || nav === 'Startseite') {
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
