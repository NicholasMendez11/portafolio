import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest">
            Lets work in something awesome together
          </p>
          <h1 className="py-4 text-gray-700  dark:text-gray-200">
            {" "}
            Hi, I&apos;m <span className="text-[#004AAD] dark:text-[#6a9bdb]">Nicholas</span>
          </h1>

          <h1 className="py-1 text-gray-700 dark:text-gray-200"> A Software Developer</h1>
          <p className="py-4 text-gray-600  dark:text-gray-200 max-w-[70%] m-auto">
            2 years of experience. Creating systems to address business needs.
            Focussed on building front-end web applications, cross-mobile
            applications, Android native apps with jetpack Compose, and
            developing integrations for Zoho&apos;s CRM and BPM.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursosr-pointer hover:scale-110 hover:cursor-pointer ease-in duration-500">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nicholasgmendez/"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursosr-pointer hover:scale-110 hover:cursor-pointer ease-in duration-500">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/NicholasMendez11"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursosr-pointer hover:scale-110 hover:cursor-pointer ease-in duration-500">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6 cursosr-pointer hover:scale-110 hover:cursor-pointer ease-in duration-500">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nicholasgmendez/"
              ></a>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
