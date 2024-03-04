import React from "react";
// import ProjectCards from "../components/ProjectCards";
// import { projectCardsLink } from "../constant/data";
// import Buttons from "../components/Buttons";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#f9f9f9] xl:pl-72 xl:pt-24 pt-12 pb-32">
      <h1 className="font-bold xl:text-2xl md:text-xl text-lg text-secondary tracking-wide xl:ml-3 md:ml-10 md:pt-12 text-center md:text-left">
        PROJECTS
      </h1>
      <p className="text-center mt-12 md:text-3xl text-lg font-bold">New projects coming soon.. 🤠</p>
      {/* <div className="xl:grid xl:grid-cols-1 flex-wrap items-center mt-[3%] space-y-8">
        {projectCardsLink.map((product) => (
          <ProjectCards key={product.image} {...product} />
        ))}
        <Buttons />
      </div> */}
    </div>
  );
};

export default Projects;
