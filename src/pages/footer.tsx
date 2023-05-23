import React from "react";
import SocialMedia from "../components/socialMedia";
import de from "../components/de.json";
import eng from "../components/eng.json";

interface FooterProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}
function Footer({ language }: FooterProps) {
  return (
    <div className="flex justify-center bg-[#100c18] h-[100vh] p-6 flex-col border-t-2">
      <main className="flex justify-around">
        <section className="flex flex-col gap-7">
          <h3 className=" mt-19 text-slate-50 font-bold tracking-wider text-xl">
            {language ? eng.footerTitle : de.footerTitle}
          </h3>
          {language
            ? eng.inputContainer.map((input, index) => {
                return (
                  <input
                    key={index}
                    className=" bg-transparent placeholder:text-slate-50 border-x-0 border-t-0 text-slate-50"
                    type={input.type}
                    placeholder={input.placheholder}
                  />
                );
              })
            : de.inputContainer.map((input, index) => {
                return (
                  <input
                    key={index}
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
            {language ? eng.messageButton : de.messageButton}
          </button>
        </section>
        <section className=" w-60 flex flex-col mt-20 text-slate-50">
          <h3 className="mb-10 font-bold tracking-wider text-xl">
            {language ? eng.contactMe : de.contactMe}
          </h3>
          <a href="/address">Erlenbacher Straße 8, 67659 Kaiserslautern</a>
          <a href="tel:+4917680358387">+4917680358387</a>
          <a href="mailto:karimovrizvan84@gmail.com">
            karimovrizvan84@gmail.com
          </a>

          <section className="mb-14">
            <a
              className="border p-3 w-[20vw] mt-10 hvr-radial-out text-center"
              style={{ backgroundColor: "transparent" }}
              download="Lebenslauf.pdf"
              href="/Lebenslauf.pdf"
            >
              {language ? eng.downloadButton : de.downloadButton}
            </a>
          </section>
          <SocialMedia />
        </section>
      </main>
    </div>
  );
}

export default Footer;
