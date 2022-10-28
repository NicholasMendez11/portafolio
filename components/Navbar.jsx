import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { Link as Scroll } from "react-scroll";
import { Player } from "@lottiefiles/react-lottie-player";
import logo from "../public/logo.jpg";
import { useTheme } from "next-themes";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const router = useRouter();
  const [linkColor, setLinkColor] = useState("#1f2937");
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    //theme
    setMounted(true);
    //end theme
    if (
      router.asPath === "/property" || // check this thing
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setnav(!nav);
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        
        <button className="" onClick={() => setTheme("light")}>

          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button className="" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      );
    }
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div
      style={{ backgroundColor: { navBg } }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#ecf0f3] dark:bg-[#1f2937] transition duration-300">
        <Image src={logo} alt="/" width="125" height="125" />
        <div>
          <ul
            style={{ backgroundColor: { linkColor } }}
            className="hidden md:flex"
          >
            <Scroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>{" "}
            </Scroll>

            <Scroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Scroll>
            <Scroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Scroll>
            <li className="ml-10 text-sm uppercase hover:border-b">
              {renderThemeChanger()}
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 hover:cursor-pointer"
            : ""
        }
      >
        <motion.div
          animate={nav ? "open" : "closed"}
          variants={variants}
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 overflow-scroll  dark:bg-[#1f2937] hover:cursor-default"
              : ""
          }
        >
          <div>
            <div className="flex w-full items-center justify-between  ">
              <Image src={logo} alt="/" width="87" height="87" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700  p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] my-4">
                {" "}
                Lets work in something awesome together
              </p>
            </div>
            <div className="py-4 flex-col">
              <Player
                src="https://assets5.lottiefiles.com/packages/lf20_0yfsb3a1.json"
                loop
                autoplay
                className="h-30"
              />
              <ul className="uppercase">
                <Scroll
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li className="py-4 text-sm">Home</li>
                </Scroll>
                <Scroll
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li className="py-4 text-sm">About</li>
                </Scroll>
                <Scroll
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li className="py-4 text-sm">Skills</li>
                </Scroll>
                <Scroll
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li className="py-4 text-sm">Projects</li>
                </Scroll>
                <Scroll
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li className="py-4 text-sm">Contact</li>
                </Scroll>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#004AAD]  dark:text-[#3b88ec]">
                  {" "}
                  Lets connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 dark:shadow-gray-700 cursosr-pointer hover:scale-105 ease-in duration-500">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/nicholasgmendez/"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 dark:shadow-gray-700 cursosr-pointer hover:scale-105 ease-in duration-500">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/NicholasMendez11"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 dark:shadow-gray-700 cursosr-pointer hover:scale-105 ease-in duration-500">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 dark:shadow-gray-700 cursosr-pointer hover:scale-105 ease-in duration-500">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
