import { useState } from "react";
import portfolioImg from "../resource/images/portfolioImg.png";
import tastyImg from "../resource/images/tastyImg.png";
import BurgerApp from "../resource/images/BurgerApp.png";
import woodies from "../resource/images/woodies.png";
import pokemonImg from "../resource/images/pokemonImg.png";
import countries from "../resource/images/countries.png";

const Projects = () => {
  const [projects] = useState([
    {
      projectName: "Portfolio",
      projectLink: "https://github.com/rizvan555/portfolio-2",
      projectImage: portfolioImg,
    },
    {
      projectName: "Tasty-App",
      projectLink: "https://github.com/rizvan555/tasty-app",
      projectImage: tastyImg,
    },
    {
      projectName: "Burger-App",
      projectLink: "https://github.com/rizvan555/my-burger-app",
      projectImage: BurgerApp,
    },
    {
      projectName: "Woodies",
      projectLink: "https://github.com/rizvan555/woodies-project-ts",
      projectImage: woodies,
    },
    {
      projectName: "Pokemon",
      projectLink: "https://github.com/rizvan555/pokemon-game",
      projectImage: pokemonImg,
    },
    {
      projectName: "Countries Wiki",
      projectLink: "https://github.com/rizvan555/find-your-country",
      projectImage: countries,
    },
  ]);
  return (
    <div className=" border-t-2 bg-[#100c18] text-white ">
      <h1 className="text-start text-5xl py-20 mx-20 font-serif font-bold ">
        Projects
      </h1>
      <div className=" grid grid-cols-3 gap-7 w-[95vw] mx-auto py-10 ">
        {projects.map((project) => {
          return (
            <ul className=" p-4 text-center rounded-md h-[45vh]  bg-transparent myBox opacity-70">
              <li className=" text-xl font-semibold">{project.projectName}</li>
              <li className=" text-sm my-4">
                <span className=" text-sm font-semibold">GitHub:</span>
                <a href={project.projectLink}> {project.projectLink}</a>
              </li>
              <img
                className="border rounded-md w-[42vw] h-[30vh]"
                src={project.projectImage}
                alt={project.projectImage}
              />
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
