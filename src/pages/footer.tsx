import React from "react";
import SocialMedia from "../components/socialMedia";
import de from "../components/de.json";
import eng from "../components/eng.json";
import { useFormik } from "formik";

interface FooterProps {
  language: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Footer({ language }: FooterProps) {
  const onSubmit = async (values: any, actions: any) => {
    // console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      fullEmail: "",
      fullSubject: "",
      message: "",
    },
    onSubmit,
  });

  type FormValues = {
    fullName: string;
    fullEmail: string;
    fullSubject: string;
    message: string;
  };

  return (
    <div className="flex justify-center bg-[#100c18] h-[100vh] md:p-4 flex-col border-t-2">
      <main className="flex justify-around flex-wrap md:mt-0 mt-28">
        <form
          className="flex flex-col gap-7 md:w-[40vw] w-[80vw]"
          onSubmit={formik.handleSubmit}
        >
          <h3 className=" md:mt-19 text-slate-50 font-bold tracking-wider md:text-xl">
            {language ? eng.footerTitle : de.footerTitle}
          </h3>
          {language
            ? eng.inputContainer.map((input, index) => {
                return (
                  <input
                    key={index}
                    className=" bg-transparent placeholder:text-slate-50 border-x-0 border-t-0 text-slate-50 md:text-lg text-[12px]"
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={formik.handleChange}
                    name={input.name}
                    value={formik.values[input.name as keyof FormValues]}
                  />
                );
              })
            : de.inputContainer.map((input, index) => {
                return (
                  <input
                    key={index}
                    className=" bg-transparent placeholder:text-slate-50 border-x-0 border-t-0 text-slate-50"
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={formik.handleChange}
                    name={input.name}
                    value={formik.values[input.name as keyof FormValues]}
                  />
                );
              })}
          <textarea
            className=" bg-transparent placeholder:text-slate-50 border-x-0 border-t-0 text-slate-50"
            placeholder="Message"
            id="message"
            cols={60}
            rows={4}
            onChange={formik.handleChange}
            value={formik.values.message}
          ></textarea>

          <button
            className=" md:w-[20vw] w-[40vw] md:p-4 p-2 text-slate-900 bg-slate-50 font-bold hvr-radial-out border md:mx-0 mx-auto"
            type="submit"
          >
            {language ? eng.messageButton : de.messageButton}
          </button>
        </form>

        <section className=" flex flex-col md:w-72 w-[80vw] mt-20 text-slate-50 md:text-start text-center">
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
              className="border md:p-3 p-2 md:w-[20vw] w-[40vw] mt-10 hvr-radial-out text-center"
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
