import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import reactjs from "../assets/react-js.svg";
import tailwind from "../assets/tailwind.svg";
import bootsrap from "../assets/bootstrap.svg";

import wave from "../assets/wave.png";
import git from "../assets/git.svg";
import npm from "../assets/npm.svg";

import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNpm,
  FaArrowDown, 
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import homeBg from "../assets/home-bg.jpg";

const Home = () => {
  return (
    // <div
    //   id="home"
    //   className="px-8 pt-28 bg-[#f9f9f9] h-full md:h-screen pb-24 dark:bg-slate-900 mx-auto w-full max-w-6xl text-center md:text-left"
    // >
    //   <div
    //     className="relative flex flex-col xl:flex-row-reverse items-center xl:justify-center gap-12 xl:pl-10 xl:pt-10"
    //     data-aos="fade-right"
    //     data-aos-delay="300"
    //   >
    //     <span className="animate-bounce">
    //       <img
    //         src={homeBg}
    //         alt=""
    //         className="rounded-full h-[300px] w-[300px] xl:h-[300px] md:h-[300px] md:w-[300px]"
    //       />
    //     </span>

    //     <div className="max-w-[400px] md:max-w-[550px] xl:max-w-[650px] text-center xl:text-left xl:pt-12">
    //       <h1 className="text-3xl md:text-4xl xl:text-[3rem] md:leading-snug xl:leading-snug font-extrabold text-primary dark:text-white">
    //         Front-End React Developer{" "}
    //         <span className="wave md:w-14 md:h-14 ml-2 w-12 h-12">
    //           <img src={wave} alt="" />
    //         </span>
    //       </h1>
    //       <p className="max-w-2xl text-[#555] text-md mt-6 md:text-md xl:text-md leading-7 dark:text-white">
    //         I create web experiences with modern technologies. Specializing in
    //         front-end development, I build interfaces that are both beautiful
    //         and functional.
    //       </p>

    //       {/* Socials */}
    //       <div className="flex justify-center xl:float-left">
    //         <div className="flex items-center gap-5 mt-8">
    //           <a
    //             href="https://www.linkedin.com/in/antonydhanorejas25/"
    //             target="https://www.linkedin.com/in/antonydhanorejas25/"
    //           >
    //             <CiLinkedin className="w-6 h-6 text-[#555] md:w-7 md:h-7 hover:text-secondary duration-300 dark:text-white" />
    //           </a>
    //           <a href="https://github.com/Dhan25">
    //             <FiGithub className="w-6 h-6 text-[#555] md:w-7 md:h-7 hover:text-secondary duration-300 dark:text-white" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Tech Stacks */}
    //   {/* <div className="xl:flex items-center xl:px-[245px] mt-8" data-aos="fade-up" data-aos-delay='400'>
    //     <h2 className="text-center md:text-md font-semibold text-primary dark:text-white">
    //       Tech Stack <span className="ml-20 hidden xl:inline-flex">|</span>
    //       <div className="md:mt-3 md:w-[105px] w-24 mt-2 h-0.5 bg-primary xl:hidden md:block dark:bg-white"></div>
    //     </h2>

    //     <div className="grid grid-cols-2 xl:flex space-y-6 xl:space-y-0 justify-items-center md:justify-center md:px-36 xl:px-0 px-1 xl:mt-0 mt-10 xl:ml-8">
    //       <span className="mt-7 xl:mt-0 flex items-center gap-1 md:gap-2 transform-translate xl:ml-8 hover:-translate-y-3 transform-translate duration-300 cursor-pointer">
    //         <img src={html} alt="" className="w-10 h-10 bg-[#E85427] rounded-lg" />
    //         <img src={css} alt="" className="w-10 h-10  bg-[#0277BD] rounded-lg" />
    //       </span>
    //       <span className="flex items-center gap-1 md:gap-2 hover:-translate-y-3 transform-translate duration-300 cursor-pointer xl:ml-8">
    //         <img src={javascript} alt="" className="w-10 h-10" />
    //         <img src={reactjs} alt="" className="w-10 h-10 rounded-md" />
    //       </span>
    //       <span className="flex items-center gap-1 md:gap-2 hover:-translate-y-3 transform-translate duration-300 cursor-pointer xl:ml-8">
    //         <img
    //           src={tailwind}
    //           alt=""
    //           className="w-10 h-10 rounded-md bg-primary"
    //         />
    //         <img src={bootsrap} alt="" className="w-10 h-10" />
    //       </span>
    //       <span className="flex items-center gap-1 md:gap-2 hover:-translate-y-3 transform-translate duration-300 cursor-pointer xl:ml-8">
    //         <img src={npm} alt="" className="w-10 h-10 rounded-md" />
    //         <img src={git} alt="" className="w-10 h-10 rounded-md" />
    //       </span>
    //     </div>
    //   </div> */}
    //   <div className="mt-14">
    //     <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
    //       <span className="text-sm font-semibold tracking-wide text-gray-700">
    //         Tech Stack
    //       </span>
    //       <span className="hidden sm:inline text-gray-400">|</span>

    //       <FaHtml5 className="w-8 h-8 text-orange-600" />
    //       <FaCss3Alt className="w-8 h-8 text-blue-600" />
    //       <FaJsSquare className="w-8 h-8 text-yellow-400" />
    //       <FaReact className="w-8 h-8 text-cyan-500" />
    //       <SiTailwindcss className="w-8 h-8 text-sky-500" />
    //       <FaBootstrap className="w-8 h-8 text-purple-600" />
    //       <FaNpm className="w-8 h-8 text-red-600" />
    //     </div>
    //   </div>
    // </div>
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative
        min-h-[100svh]
        bg-white text-gray-900
        flex items-center
        px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32
      dark:bg-slate-900 md:-mt-4 mt-12"
    >
      <div className="mx-auto w-full max-w-6xl text-center md:text-left" >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 ">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1
              id="hero-heading"
              className="
                font-extrabold tracking-tight
                leading-[1.15]
                text-[clamp(2rem,6vw,3.75rem)]
              dark:text-white md:text-center lg:text-left"
            >
              Front-End React <br />
              <span className="inline-flex items-center gap-3 mt-2">
                Developer
                <span
                  aria-hidden
                  className="wave text-[clamp(1.75rem,4vw,2.5rem)] md:w-14 md:h-14 ml-2 w-12 h-12"
                >
                  <img src={wave} alt="" />
                </span>
              </span>
            </h1>

            <p
              className="
                mt-6
                text-gray-600
                leading-relaxed
                text-[14px]
                md:w-[720px]
                w-[350px]
                text-center lg:text-left dark:text-white md:text-[16px] lg:text-[18px]"
            >
              I create web experiences with modern technologies. Specializing in
              front-end development, I build interfaces that are both beautiful
              and functional.
            </p>

            {/* Social Links */}
            <nav
              aria-label="Social links"
              className="mt-8 flex items-center gap-5 justify-center lg:justify-normal dark:text-white"
            >
              <a
                href="https://www.linkedin.com/in/antonydhanorejas25/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-700 dark:text-white hover:text-secondary transition-colors"
              >
                <CiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Dhan25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-700 dark:text-white hover:text-secondary transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
            </nav>

            {/* Tech Stack */}
            <div
              className="mt-14 md:flex-1"
              data-aos="fade-up"
              data-aos-delay="400 "
            >
              <div className="flex flex-col items-center lg:flex-row lg:items-center md:justify-center md:space-x-6 space-y-3mt-3 xl:ml-6">
                <span className="text-sm xl:text-lg lg:text-nowrap font-semibold tracking-wide text-gray-700 dark:text-white">
                  Tech Stack
                </span>
                <div className="hidden md:hidden xl:flex sm:inline text-gray-400">
                  |
                </div>
                <div class="md:mt-3 mt-3 w-24 h-0.5 bg-primary md:hidden dark:bg-white"></div>

                <div class="grid grid-cols-4 gap-5 md:flex place-items-center mt-6 lg:mt-0">
                  <FaHtml5 className="w-8 h-8 text-orange-600" />
                  <FaCss3Alt className="w-8 h-8 text-blue-600" />
                  <FaJsSquare className="w-8 h-8 text-yellow-400" />
                  <FaReact className="w-8 h-8 text-cyan-500" />
                  <SiTailwindcss className="w-8 h-8 text-sky-500" />
                  <FaBootstrap className="w-8 h-8 text-purple-600" />
                  <FaNpm className="w-8 h-8 text-red-600" />
                  <FaGitAlt className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              {/* <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center md:space-x-6 space-y-4 md:space-y-0 p-4 lg:-ml-2">
                
                <h2 className="flex items-center text-sm font-semibold text-gray-800 md:order-none order-first">
                  Tech Stack
                  <span className="ml-4 hidden xl:inline">|</span>
                </h2>

          
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <FaHtml5 className="w-8 h-8 text-orange-600" />
                  <FaCss3Alt className="w-8 h-8 text-blue-600" />
                  <FaJsSquare className="w-8 h-8 text-yellow-500" />
                  <FaReact className="w-8 h-8 text-cyan-500" />
                  <SiTailwindcss className="w-8 h-8 text-teal-400" />
                  <FaBootstrap className="w-8 h-8 text-purple-600" />
                  <FaNpm className="w-8 h-8 text-red-600" />
                </div>
              </div> */}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <figure className="relative">
              <img
                src={homeBg}
                alt="Portrait of a Front-End React Developer"
                className="
                  rounded-full object-cover
                  w-48 h-48
                  sm:w-56 sm:h-56
                  md:w-64 md:h-64
                  lg:w-72 lg:h-72
                  shadow-lg
                "
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>

      {/* Sroll animation */}
      <div className="absolute mt-[590px] ml-[600px] animate-bounce md:mt-[1000px] md:ml-[320px] xl:mt-[580px] xl:ml-[540px]">
          <span className="text-white">Scroll</span>
          <FaArrowDown className="text-secondary mt-3 h h-8 md:ml-[12px]"/>
        </div>
    </section>
  );
};

export default Home;
