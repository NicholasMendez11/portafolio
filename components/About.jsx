import React from "react";
import Image from "next/image";
import Logo from "../public/logo.jpg";
import { Link as Scroll } from "react-scroll";
import { Player } from '@lottiefiles/react-lottie-player';
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-10 ">
        <div className="col-span-2">
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
                duration={500}>
            Check out some of my latest projects
            </Scroll>
          </p>
        </div>
        <div className=" w-full h-auto hover:cursor-pointer flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        
          <Player src="https://assets8.lottiefiles.com/private_files/lf30_obidsi0t.json" loop autoplay />
        </div>
      </div>
    </div>
  );
};

export default About;
