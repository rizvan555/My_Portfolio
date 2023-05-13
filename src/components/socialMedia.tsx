import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXingSquare,
} from "react-icons/fa";

function SocialMedia() {
  const socialMedia = [
    {
      icon: <BsFacebook size={25} />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <FaInstagram size={25} />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <FaGithub size={25} />,
      link: "https://github.com/rizvan555",
    },
    {
      icon: <FaLinkedin size={25} />,
      link: "https://www.linkedin.com/in/rizvan-karimov-b90a26243/",
    },
    {
      icon: <FaXingSquare size={25} />,
      link: "https://www.xing.com/discover/updates",
    },
  ];
  return (
    <div className="flex  w-[30vw] gap-5 ml-[-2vw]">
      <section className=" flex gap-5 ">
        {socialMedia.map((media, index) => {
          return (
            <a
              key={index}
              href={media.link}
              className=" w-12 h-12 bg-slate-500 flex items-center justify-center rounded-full hvr-wobble-top hover:bg-[#7CFC00]"
            >
              {media.icon}
            </a>
          );
        })}
      </section>
    </div>
  );
}

export default SocialMedia;
