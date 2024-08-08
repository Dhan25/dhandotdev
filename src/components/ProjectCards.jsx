import React from "react";
import uberClone from "../assets/uberClone-bg.png";
// import Buttons from "./Buttons";

const ProjectCards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full max-w-full px-6 pt-6 gap-6 md:px-10 xl:px-0">
      <a href="https://uber-technologies-clone.vercel.app/" target="https://uber-technologies-clone.vercel.app/" className="border-b-2 h-fit shadow-lg rounded-lg">
        <img src={uberClone} alt="" className="p-3 h-auto max-w-full object-cover rounded-lg" />
        <div className="flex items-center gap-3 p-2">
          <span className="border p-1 px-2 rounded bg-secondary text-white text-sm font-medium">React JS</span>
          <span className="border p-1 px-2 rounded bg-secondary text-white text-sm font-medium">Tailwind CSS</span>
          <span className="border p-1 px-2 rounded bg-secondary text-white text-sm font-medium">Vite</span>
        </div>
        <h1 className="font-bold p-2 text-lg">Uber United State Clone</h1>
        <p className="text-left leading-relaxed text-[16px] xl:text-sm p-2">Uber Technologies, Inc., commonly referred to as Uber, is an American multinational transportation company that provides ride-hailing services, courier services, food delivery, and freight transport</p>
      </a>

      <div className="border-b-2 h-fit shadow-lg">
        <img src={uberClone} alt="" className="p-3 h-auto max-w-full object-cover rounded-lg" />
        <div className="flex items-center gap-3 p-2">
          <span className="border p-1 px-2 rounded bg-secondary text-white text-sm font-medium">React JS</span>
          <span className="border p-1 px-2 rounded bg-secondary text-white text-sm font-medium">Tailwind CSS</span>
          <span className="border p-1 px-2 rounded bg-secondary text-white text-sm font-medium">Vite</span>
        </div>
        <h1 className="font-bold p-2 text-lg">Uber United State Clone</h1>
        <p className="text-left leading-relaxed text-[16px] xl:text-sm p-2">Uber Technologies, Inc., commonly referred to as Uber, is an American multinational transportation company that provides ride-hailing services, courier services, food delivery, and freight transport</p>
      </div>

      <div className="border-b-2 h-fit shadow-lg">
        <img src={uberClone} alt="" className="p-3 h-auto max-w-full object-cover rounded-lg" />
        <div className="flex items-center gap-3 p-2">
          <span className="border p-1 px-2 rounded bg-secondary text-white text-sm font-medium">React JS</span>
          <span className="border p-1 px-2 rounded bg-secondary text-white text-sm font-medium">Tailwind CSS</span>
          <span className="border p-1 px-2 rounded bg-secondary text-white text-sm font-medium">Vite</span>
        </div>
        <h1 className="font-bold p-2 text-lg">Uber United State Clone</h1>
        <p className="text-left leading-relaxed text-[16px] xl:text-sm p-2">Uber Technologies, Inc., commonly referred to as Uber, is an American multinational transportation company that provides ride-hailing services, courier services, food delivery, and freight transport</p>
      </div>
    </section>
  );
};

export default ProjectCards;
