import React from "react";
import Image from "next/image";
import Logo from "../public/logo.jpg";
import { Link as Scroll } from "react-scroll";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
const About = () => {
  
  const icon = {
    hidden: {
      pathLength: 0,
      fill: rgba(255, 255, 255, 1)
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">


      <svg xmlns="http://www.w3.org/2000/svg" 
       xmlns:xlink="http://www.w3.org/1999/xlink"
       xmlns:svgjs="http://svgjs.dev/svgjs"
       viewBox="0 0 800 400"
      >
        <motion.path
         d="M148.4304962158203,359.6412658691406C148.4304962158203,359.6412658691406,154.70852661132812,45.73991012573242,154.70852661132812,45.73991012573242C154.70852661132812,45.73991012573242,364.5740051269531,351.56951904296875,364.5740051269531,351.56951904296875C364.5740051269531,351.56951904296875,464.12554931640625,67.26457214355469,464.12554931640625,67.26457214355469C464.12554931640625,67.26457214355469,259.6412658691406,63.67713165283203,259.6412658691406,63.67713165283203C259.6412658691406,63.67713165283203,534.0806884765625,330.0448303222656,534.0806884765625,330.0448303222656C534.0806884765625,330.0448303222656,642.6008911132812,58.295963287353516,642.6008911132812,58.295963287353516C642.6008911132812,58.295963287353516,708.07177734375,339.9103088378906,708.07177734375,339.9103088378906"
         fill="none"
         stroke-width="25"
         stroke='url("#SvgjsLinearGradient1001")'
         stroke-linecap="round"
         stroke-dasharray="104 0"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
      </svg>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-10 ">
        <motion.div
          className="col-span-2"
          initial={{ x: -300, scale: 1 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <p className=" uppercase text-xl tracking-widest text-[#004AAD] dark:text-[#3b88ec] ">
            About
          </p>
          <h2 className="py-4  dark:text-white-200">WHO I AM</h2>
          <p className="py-2 text-gray-600  dark:text-gray-200">
            Sotfware developer looking forward to expanding my skills and
            knowledge within the software development industry, contributing
            with ideas, solutions, and results in a meaningful way. A faithful
            believer in teamwork, how this allows us to achieve more, and that
            success is always better when is shared.
          </p>

          <br />
          <p className="py-2 text-gray-600  dark:text-gray-200">
            2 years of experience. Creating systems to address business needs.
            Focussed on building front-end web applications, cross-mobile
            applications, Android native apps with jetpack Compose, and
            developing integrations for Zoho&apos;s CRM and BPM.
          </p>
          <br />
          <p className="py-2 text-gray-600 underline cursor-pointer dark:text-gray-200">
            <Scroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Check out some of my latest projects
            </Scroll>
          </p>
        </motion.div>
        <motion.div
          className=" w-full h-auto hover:cursor-pointer flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
          initial={{ scale: 0 }}
          whileInView={{ scale: [0.3, 0.5, 1] }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Player
            src="https://assets8.lottiefiles.com/private_files/lf30_obidsi0t.json"
            loop
            autoplay
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
