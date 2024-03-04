import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import reactjs from "../assets/react-js.svg";
import tailwind from "../assets/tailwind.svg";
import bootsrap from "../assets/bootstrap.svg";
import homeBg from "../assets/home-bg.jpg";
import wave from "../assets/wave.png";
import git from "../assets/git.svg";
import npm from "../assets/npm.svg";

const Home = () => {
  return (
    <div id="home" className="px-8 pt-28 bg-[#f9f9f9] w-full h-full pb-24">
      <div className="relative flex flex-col xl:flex-row-reverse items-center xl:justify-center gap-12 xl:pl-12 xl:pt-10">
        <span className="animate-bounce">
          <img
            src={homeBg}
            alt=""
            className="rounded-full h-[330px] w-[350px] xl:h-[350px] md:h-[350px]"
          />
        </span>

        <div className="max-w-[400px] md:max-w-[550px] xl:max-w-[600px] text-center xl:text-left xl:pt-12">
          <h1 className="text-4xl md:text-5xl xl:text-[3.5rem] md:leading-snug xl:leading-snug font-extrabold text-primary">
            Front-End React Developer <span className="wave md:w-16 md:h-16 ml-2 w-12 h-12"><img src={wave} alt="" /></span>
          </h1>
          <p className="text-[#555] text-md mt-6 md:text-lg xl:text-xl leading-7">
            Hi, I'm Antony Dhan Orejas. A passionate Front-end React Developer
            based in Cavinti, Laguna. 📍
          </p>

          {/* Socials */}
          <div className="flex justify-center xl:float-left">
            <div className="flex items-center gap-5 mt-8">
              <a href="https://www.linkedin.com/in/antonydhanorejas25/">
                <CiLinkedin className="w-8 h-8 text-[#555] md:w-7 md:h-7 hover:text-secondary duration-300" />
              </a>
              <a href="https://github.com/Dhan25">
                <FiGithub className="w-8 h-8 text-[#555] md:w-7 md:h-7 hover:text-secondary duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stacks */}
      <div className="xl:flex items-center xl:px-64 mt-12">
        <h2 className="text-center md:text-md font-bold text-primary">
          Tech Stack <span className="ml-10 hidden xl:inline-flex">|</span>
          <div className="md:ml-[300px] md:mt-3 md:w-[105px] w-24 ml-[115px] mt-2 h-0.5 bg-primary xl:hidden md:block"></div>
        </h2>

        <div className="grid grid-cols-2 xl:flex space-y-6 xl:space-y-0 justify-items-center md:justify-center md:px-36 xl:px-0 px-1 xl:mt-0 mt-10 xl:ml-8">
          <span className="mt-7 xl:mt-0 flex items-center gap-1 md:gap-2 transform-translate xl:ml-8 hover:-translate-y-3 transform-translate duration-300 cursor-pointer">
            <img src={html} alt="" className="w-12 h-12 bg-[#E85427] rounded-lg"/>
            <img src={css} alt="" className="w-12 h-12  bg-[#0277BD] rounded-lg"/>
          </span>
          <span className="flex items-center gap-1 md:gap-2 hover:-translate-y-3 transform-translate duration-300 cursor-pointer xl:ml-8">
            <img src={javascript} alt="" className="w-12 h-12" />
            <img src={reactjs} alt="" className="w-12 h-12 rounded-md" />
          </span>
          <span className="flex items-center gap-1 md:gap-2 hover:-translate-y-3 transform-translate duration-300 cursor-pointer xl:ml-8">
            <img
              src={tailwind}
              alt=""
              className="w-12 h-12 rounded-md bg-primary"
            />
            <img src={bootsrap} alt="" className="w-12 h-12 " />
          </span>
          <span className="flex items-center gap-1 md:gap-2 hover:-translate-y-3 transform-translate duration-300 cursor-pointer xl:ml-8">
            <img src={npm} alt="" className="w-12 h-12 rounded-md"/>
            <img src={git} alt="" className="w-12 h-12 rounded-md"/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
