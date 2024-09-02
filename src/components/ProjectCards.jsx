import React, { useState } from "react";
import uberClone from "../assets/UberClone-bg.png";
import personalPortfolio from "../assets/Personal-Portfolio-bg.png";
import foodWebsite from "../assets/Food-Website-bg.png";
import { RiArrowRightLine } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import Modal from "./Modal";


const ProjectCards = () => {

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState(null);

  // const openModalWithContent = (content) => {
  //   setModalContent(content);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setModalContent(null); // Optionally clear content when closing
  // };

  return (
    <section className="mt-12">
      <div className="grid md:grid-cols-2 items-center justify-center xl:px-40 md:px-24 gap-12">

        {/* Uber Clone */}
        <div className="border-2 shadow-xl rounded-xl w-72 h-60">
          <img src={uberClone} alt="" className="w-full object-contain p-2 h-40 rounded-xl hover:scale-105 duration-300" />
          <h1 className="mt-2 font-bold ml-2 dark:text-white">Uber Inc. Clone</h1>
          <div className="flex items-center justify-between px-2 mt-2">
            <a href="https://uber-technologies-clone.vercel.app" target="https://uber-technologies-clone.vercel.app"
              className="group flex items-center text-xs text-tertiary dark:text-white">Demo <span><RiArrowRightLine className="h-3 ml-1 group-hover:translate-x-2 transition duration-300 ease-out" /></span></a>
            {/* <button onClick={() => openModalWithContent(
              <div className="w-72 h-52">
                <h2 className="text-lg font-bold mt-3">Uber Clone Inc.</h2>
                <p className="text-sm mt-3 text-left">Uber Technologies, Inc., commonly referred to as Uber, is an American multinational transportation company that provides ride-hailing services, courier services, food delivery, and freight transport.</p>
                <div className="flex items-center gap-3 mt-6 text-xs">
                  <h1 className="font-semibold">Tech use:</h1>
                  <span className="border rounded-full px-2">React</span>
                  <span className="border rounded-full px-2">Tailwind CSS</span>
                  <span className="border rounded-full px-2">Vite</span>
                </div>
              </div>
              )} className="flex items-center text-xs text-tertiary mr-1"> Code <FaGithub className="h-6 ml-2" />
            </button> */}
            <a href="https://github.com/Dhan25/uber-technologies-clone" target="https://github.com/Dhan25/uber-technologies-clone" className="flex items-center text-xs text-tertiary mr-1">Code <FaGithub className="h-6 ml-2" /></a>

          </div>
        </div>


        {/* Personal Portfolio */}
        <div className="border-2 shadow-xl rounded-xl w-72 h-60">
          <img src={personalPortfolio} alt="" className="w-full object-contain p-2 h-40 rounded-xl hover:scale-105 duration-300" />
          <h1 className="mt-2 font-bold ml-2 dark:text-white">First Personal Portfolio</h1>
          <div className="flex items-center justify-between px-2 mt-2">
            <a href="https://my-personal-portfolio-vert.vercel.app/" target="https://my-personal-portfolio-vert.vercel.app/"
              className="group flex items-center text-xs text-tertiary dark:text-white">Demo <span><RiArrowRightLine className="h-3 ml-1 group-hover:translate-x-2 transition duration-300 ease-out" /></span></a>
            {/* <button onClick={() => openModalWithContent(
              <div>
                <h2 className="text-lg font-bold mt-3">Personal Portfolio</h2>
                <p>This is some content for the first modal.</p>
              </div>
            )} className="flex items-center text-xs text-tertiary mr-1"> Code <FaGithub className="h-6 ml-2" /></button> */}
            <a href="https://github.com/Dhan25/my-personal-portfolio" target="https://github.com/Dhan25/my-personal-portfolio" className="flex items-center text-xs text-tertiary mr-1">Code <FaGithub className="h-6 ml-2" /></a>

          </div>
        </div>

        {/* Food Website */}
        <div className="border-2 shadow-xl rounded-xl w-72 h-60">
          <img src={foodWebsite} alt="" className="w-full object-contain p-2 h-40 rounded-xl hover:scale-105 duration-300" />
          <h1 className="mt-2 font-bold ml-2 dark:text-white">Food Website</h1>
          <div className="flex items-center justify-between px-2 mt-2">
            <a href="https://food-website-theta-sepia.vercel.app/" target="https://food-website-theta-sepia.vercel.app/"
              className="group flex items-center text-xs text-tertiary dark:text-white">Demo <span><RiArrowRightLine className="h-3 ml-1 group-hover:translate-x-2 transition duration-300 ease-out" /></span></a>
            {/* <button onClick={() => openModalWithContent(
              <div>
                <h2 className="text-lg font-bold mt-3">Food Website</h2>
                <p>This is some content for the first modal.</p>
              </div>
            )} className="flex text-xs text-tertiary mr-1 font-semibold"> View <BsBoxArrowUpRight className="h-3 ml-2" />
            </button> */}
            <a href="https://github.com/Dhan25/food-website" target="https://github.com/Dhan25/food-website" className="flex items-center text-xs text-tertiary mr-1">Code <FaGithub className="h-6 ml-2" /></a>
          </div>
        </div>




        {/* <Modal open={isModalOpen} onClose={closeModal}>
          {modalContent}
        </Modal> */}
      </div>
    </section>
  );
};

export default ProjectCards;
