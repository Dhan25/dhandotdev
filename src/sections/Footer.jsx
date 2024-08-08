import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-primary">
      <div className="xl:px-64 flex flex-col md:flex-row md:justify-between items-center xl:p-[4rem] p-[3rem]">
        <h1 className="text-white font-bold text-center text-[18px]">
          Copyright © 2024. All rights are reserved
        </h1>

        <div className="flex items-center gap-5 mt-6 md:mt-0">
          <a href="https://www.linkedin.com/in/antonydhanorejas25/" target="https://www.linkedin.com/in/antonydhanorejas25/">
            <CiLinkedin className="w-7 h-7 text-white md:w-7 md:h-7 hover:scale-125 duration-300" />
          </a>
          <a href="https://github.com/Dhan25" target="https://github.com/Dhan25">
            <FiGithub className="w-7 h-7 text-white md:w-7 md:h-7 hover:scale-125 duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
