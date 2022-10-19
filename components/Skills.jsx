import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Skills = () => {
  const [show, setShow] = useState(false);

  const skills2 = () => {
    setShow(!show);
  };
  //framer
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: 0,
    },
  };

  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h2>React</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/html.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h2>HTML</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h2>CSS</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h2>Tailwind</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/node.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h2>Node js</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h2>Next js</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/github1.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h2>GitHub</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6  flex justify-center ">
          <h3
            className="hover:scale-105 ease-in duration-100 w-[100px] underline hover:cursor-pointer flex justify-center"
            onClick={skills2}
          >{show?  <FaAngleUp/>:<FaAngleDown /> }
           
          </h3>
        </div>

        <motion.div
            animate={show? 'open':'closed'}
            variants={menuVariants}
          className={
            show
              ? "grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              : "grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          }>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/kotlin.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h3>Amazon Web Services</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/flutter.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h3>Amazon Web Services</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/jetpack.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h3>Amazon Web Services</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto pt-5">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" m-auto tracking-widest">
                <h3>Amazon Web Services</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;