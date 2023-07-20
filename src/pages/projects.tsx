import { useState } from 'react';
import portfolioImg from '../resource/images/portfolioImg.png';
import tastyImg from '../resource/images/tastyImg.png';
import BurgerApp from '../resource/images/BurgerApp.png';
import woodies from '../resource/images/woodies.png';
import pokemonImg from '../resource/images/pokemonImg.png';
import countries from '../resource/images/countries.png';
import { AiOutlineGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Projects = () => {
  const [projects] = useState([
    {
      projectName: 'Burger-App',
      projectLink: 'https://github.com/rizvan555/my-burger-app',
      projectImage: BurgerApp,
    },
    {
      projectName: 'Tasty-App',
      projectLink: 'https://github.com/rizvan555/tasty-app',
      projectImage: tastyImg,
    },
    {
      projectName: 'Portfolio',
      projectLink: 'https://github.com/rizvan555/portfolio-2',
      projectImage: portfolioImg,
    },
    {
      projectName: 'Woodies',
      projectLink: 'https://github.com/rizvan555/woodies-project-ts',
      projectImage: woodies,
    },
    {
      projectName: 'Pokemon',
      projectLink: 'https://github.com/rizvan555/pokemon-game',
      projectImage: pokemonImg,
    },
    {
      projectName: 'Countries Wiki',
      projectLink: 'https://github.com/rizvan555/find-your-country',
      projectImage: countries,
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" border-t-2 bg-[#100c18] text-white "
    >
      <h1 className="text-start md:text-5xl text-xl py-20 mx-20 font-serif font-bold ">
        Projects
      </h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className=" md:grid grid-cols-3 md:gap-7 md:w-[95vw] w-[70vw] mx-auto py-10 md:mb-0 mb-10"
      >
        {projects.map((project, index) => {
          return (
            <motion.ul
              variants={item}
              className=" md:p-4 p-2 text-center rounded-md md:h-[50vh] md:mb-0 mb-10 bg-transparent myBox opacity-80"
              key={index}
            >
              <li className=" text-xl font-semibold">{project.projectName}</li>
              <li className=" text-sm my-4">
                <button className=" text-sm bg-[#921de0] font-semibold mx-auto rounded-sm flex items-center gap-2 px-4 py-2">
                  <AiOutlineGithub />
                  <a href={project.projectLink}>GitHub</a>
                </button>
              </li>
              <img
                className="border rounded-md md:w-[42vw] w-[60vw] md:h-[30vh] mx-auto"
                src={project.projectImage}
                alt={project.projectImage}
              />
            </motion.ul>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
