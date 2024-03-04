import React from "react";
// import Buttons from "./Buttons";

const ProjectCards = ({ image, title, desc }) => {
  return (
    <section className="grid md:place-items-center xl:place-items-start px-3">
      <div className="flex-wrap xl:w-[1000px] xl:h-[350px] md:w-[700px] md:h-[350px] w-full h-full rounded-xl bg-white shadow-xl p-5">
        <div className="grid md:grid-cols-2 justify-items-center">
          <img
            src={image}
            alt={title}
            className="flex-wrap md:w-[500px] md:h-[300px] bg-center bg-cover rounded-xl"
          />
          <div className="relative text-center px-2 leading-normal">
            <h1 className="text-center xl:text-xl font-bold tracking-wider leading-snug mt-3 md:text-lg">
              {title}
            </h1>
            <p className="mt-3 ml-3 text-[16px] text-md">{desc}</p>

            <div className="flex items-center justify-center mt-5">
              {/* <Buttons /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
