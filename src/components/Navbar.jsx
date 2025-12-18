import { useState, useEffect } from "react";
import { navLinks } from "../constant/data";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    const handleNavMenuClose = () => {
      setNavMenu(false);
    };
    document.addEventListener("mousedown", handleNavMenuClose);
  }, []);

const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className={`fixed top-0 left-0 py-6 px-4 w-screen shadow-md xl:px-12 xl:py-6 bg-white z-10 dark:bg-slate-900 ${isScrolled ? 'py-3 bg-transparent dark:bg-transparent backdrop-blur-md shadow-xs': 'py-3'}`} >
      <nav className="flex items-center justify-between md:px-4 lg:ml-24">
        <a href="" className="font-bold tracking-wider text-[16px] dark:text-white flex items-center">
          <h1 className="text-secondary">Dhan.</h1><span>dev</span>
        </a>

        {/* Large Screeen */}
        <ul className="relative flex items-center pl-44 md:pl-[450px]">
          <div className="hidden items-center gap-8 xl:flex">
            {navLinks.map((item) => (
              <li key={item.link}>
                <a
                  href={item.id}
                  className="text-[14px] font-semibold text-primary hover:text-secondary dark:text-white"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </div>
          <ThemeToggle/>
        </ul>

        {/* NavLinks Button*/}
        <div className="xl:hidden block dark:text-white">
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
          className={`xl:hidden flex flex-col items-center gap-3 md:gap-6 overflow-hidden absolute bg-white top-[60px]
             md:top-[75px] p-3 px-3 w-full h-screen shadow-lg left-0 md:space-y-24
            space-y-12 z-10 transition-transform duration-300 dark:bg-slate-900 ${navMenu ? "translate-y-0 " : "translate-x-full"
            }`}
        >
          {navLinks.map((item) => (
            <li key={item.link} className="mt-52">
              <a
                href={item.id}
                className="text-2xl md:text-3xl font-semibold text-primary hover:text-secondary dark:text-white"
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