import aboutBg from "../assets/about-bg.jpg";
import animateBg from "../assets/animate-bg.png";
import animateAbout from "../assets/animate-about.svg";
import { HiDownload } from "react-icons/hi";
import resume from "../assets/resume.pdf";

const About = () => {
  return (
    <div id="about" className="bg-white w-full h-fit xl:pt-24 xl:px-64 xl:pb-36 dark:bg-slate-900">
      <div className="pt-28 px-8">
        <div className="relative grid grid-rows-1 md:grid-cols-1 md:justify-items-center xl:flex gap-6" data-aos='fade-down' data-aos-delay='400'>
          <img
            src={aboutBg}
            alt=""
            className="xl:w-[26rem] xl:h-[21.5rem] md:w-[28rem] md:h-[25rem] bg-cover bg-no-repeat bg-center rounded-2xl" data-aos='fade-right' data-aos-delay='400'
          />

          <div className="hidden md:block">
            <img
              src={animateAbout}
              alt=""
              className="absolute xl:-bottom-5 md:bottom-96 md:left-[500px] xl:left-[300px]  xl:w-[170px] md:w-[170px] xl:h-[170px] md:h-[170px] bg-white rounded-full animate-spin "
            />
            <img
              src={animateBg}
              alt=""
              className="absolute xl:w-16 xl:h-16 md:h-16 xl:bottom-[40px] md:bottom-[450px] md:left-[550px] xl:left-[350px]"
            />
          </div>

          <div className="flex flex-col text-center xl:text-left md:px-8 pb-20" data-aos='fade-down' data-aos-delay='400'>
            <h1 className="text-secondary font-extrabold text-[1.2rem]">
              ABOUT ME
            </h1>
            <h2 className="text-primary text-[1.5rem] md:text-[1.9rem] xl:text-2xl font-bold mt-2 md:px-12 md:leading-[2.5rem] xl:px-0 dark:text-white 2xl:w-[350px]">
              Front-end Developer <br /> based in Cavinti, Laguna 📍
            </h2>
            <p className="xl:mt-4 mt-5 xl:max-w-[450px] text-[#555] text-lg px-6 md:mt-5 md:px-12 xl:px-0 md:leading-6 dark:text-white">
              Hey, my name is Antony, and I'm a Frontend Developer. My passion
              is to create and develop a clean UI/UX for my users.
              <br />
              <br />
              My main stack currently is React in combination with Tailwind CSS.
            </p>
            <div className="md:mt-6 overflow-hidden" data-aos='fade-up' data-aos-delay='500'>
              <div className="flex xl:float-left justify-center xl:mt-2 mt-6">
                <a
                  href={resume}
                  className="flex items-center bg-secondary text-white px-6 text-sm py-3 rounded-xl hover:text-secondary hover:border-secondary hover:border-2 hover:bg-transparent hover:-translate-y-2 duration-500 hover:dark:text-white"
                  target={resume} >
                  Download Resume <HiDownload className="ml-3 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
