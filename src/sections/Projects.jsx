import React from "react";
import ProjectCards from "../components/ProjectCards";
import puzzle from "../assets/puzzle.svg"

const Projects = () => {
  return (
    <div id="projects" className="bg-[#f9f9f9] h-full w-full xl:pl-[270px] pt-12 pb-32 xl:px-64 dark:bg-slate-900">
      <h1 className="font-bold xl:text-2xl md:text-xl text-lg text-secondary tracking-wide xl:ml-3 md:ml-10 md:pt-12 text-center" data-aos='fade-down' data-aos-delay='400'>
        PROJECTS
      </h1>
      <div className="flex justify-center gap-2" data-aos='fade-down' data-aos-delay='400'>
        <p className="xl:ml-3 md:ml-10 font-bold mt-4 text-lg text-center md:flex items-center dark:text-white">Each project is a unique piece of development <img src={puzzle} alt="" className="w-8 hidden md:flex md:ml-3"/></p>
      </div>
      {/* <p className="text-center mt-12 md:text-3xl text-lg font-bold">New projects coming soon.. 🤠</p> */}
      {/* <div className="xl:grid xl:grid-cols-1 flex-wrap items-center mt-[3%] space-y-8">
        {projectCardsLink.map((product) => (
          <ProjectCards key={product.image} {...product} />
        ))}
        <Buttons />
      </div> */}
      <div className="w-full h-full">
        <ProjectCards/>
      </div>
    </div>
  );
};

export default Projects;
