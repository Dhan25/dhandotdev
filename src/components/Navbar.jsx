import React, { useState, useEffect } from "react";
import { navLinks } from "../constant/data";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    const handleNavMenuClose = () => {
      setNavMenu(false);
    };
    document.addEventListener("mousedown", handleNavMenuClose);
  },[]);

  return (
    <div className="fixed top-0 left-0 px-3 py-6 w-full shadow-md xl:px-12 xl:py-6 bg-white z-10">
      <nav className="flex items-center justify-between px-5">
        <a href="" className="font-bold tracking-wider text-xl">
          <span>Antony.dev</span>
        </a>

        {/* Large Screeen */}
        <ul className="hidden items-center gap-8 xl:flex">
          {navLinks.map((item) => (
            <li key={item.link}>
              <a
                href={item.id}
                className="text-md font-semibold text-primary hover:text-secondary"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* NavLinks Button*/}
        <div className="xl:hidden block">
          {!navMenu ? (
            <FaBars
              className="h-6 w-6 md:h-7 md:w-8 cursor-pointer"
              onClick={() => setNavMenu(true)}
            />
          ) : (
            <IoMdClose
              className="h-6 w-6 md:h-7 md:w-8 cursor-pointer"
              onClick={() => setNavMenu(false)}
            />
          )}
        </div>

        {/* Small Screens */}
        <ul
          className={`xl:hidden flex flex-col items-center gap-3 md:gap-6 overflow-hidden absolute bg-white top-16 p-3 px-3 w-full h-[1000px] shadow-lg left-0 space-y-5 z-10 transition-transform duration-300 ${
            navMenu ? "translate-y-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.link} className="mt-56">
              <a
                href={item.id}
                className="text-2xl md:text-3xl font-semibold text-primary hover:text-secondary"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
