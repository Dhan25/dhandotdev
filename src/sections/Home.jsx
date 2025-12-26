import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import wave from "../assets/wave.png";

import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNpm,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import homeBg from "../assets/home-bg.jpg";

const Home = () => {
  return (
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
      <div className="mx-auto w-full max-w-6xl text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="order-2 lg:order-1 mt-6">
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
              className="mt-12 md:flex-1  "
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
                  <FaHtml5 className="tech-icon w-8 h-8 text-[#E34F26]" title="HTML5" />
                  <FaCss3Alt
                    className="tech-icon w-8 h-8 text-[#1572B6]"
                    title="CSS3"
                  />
                  <FaJsSquare
                    className="tech-icon w-8 h-8 text-[#F7DF1E]"
                    title="JavaScript"
                  />
                  <FaReact className="tech-icon w-8 h-8 text-[#61DAFB]" title="React" />
                  <SiTailwindcss
                    className="tech-icon w-8 h-8 text-[#38BDF8]"
                    title="Tailwind CSS"
                  />
                  <FaBootstrap
                    className="tech-icon w-8 h-8 text-[#7952B3]"
                    title="Bootstrap"
                  />
                  <FaNpm className="tech-icon w-8 h-8 text-[#CB3837]" title="NPM" />
                  <FaGitAlt className="tech-icon w-8 h-8 text-[#F05032]" title="Git" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          {/* Right Image with Blob Effect */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Blob Background */}
            <div className="relative inset-0  opacity-20 blur-2xl animate-blob" />

            {/* Profile Image */}
            <div className="relative overflow-hidden animate-blob">
              <img
                src={homeBg}
                alt="Front-end React Developer"
                loading="lazy"
                className="rounded-full object-cover w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
