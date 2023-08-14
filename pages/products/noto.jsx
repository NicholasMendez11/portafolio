import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Noto = () => {
  return (
    <div className="w-screen h-screen bg-primary/60 ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={"/NOTOfull.png"}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            NOTO
          </h2>
          <h3 className="md:text-3xl font-bold text-white lg:text-xl  xl:px-48 ">
            {" "}
            <span className=" hover:cursor-pointer text-[#feffff] bg-[#53bad6] p-2 rounded-md">
              Flutter
            </span>{" "}
            <span className="hover:cursor-pointer bg-[#a8722c] p-2 rounded-md">
            Riverpod
            </span>
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <h2 className="mb-4 text-md font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Overview
          </h2>
          <p className="mb-6 text-lg font-normal  dark:text-gray-400">
          NOTO is a minimalist app for IOS and Android. Intended to be a tool in my personal struggle to avoid procrastination. It lists the important tasks to be carried out during the day, with a marginal space for those that we decide to leave for tomorrow

          </p>
          <button className="px-8 py-2 mt-4 mr-8 font-bold rounded-md bg-gradient-to-r from-[#089ec0] to-[#3a7bd5] cursor-not-allowed">
            {/* <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/NicholasMendez11/NOTO--No-Tommorow-App-"
            > */}
            Demo {/* </a> */}
          </button>
          <button className="px-8 py-2 mt-4 mr-8 font-bold rounded-md bg-gradient-to-r from-[#089ec0] to-[#3a7bd5]">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/NicholasMendez11/productiva"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4">
          <div className="p-2 ">
            <p className="text-center font-bold pb-2 ">Features</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <div>
                <p className="text-gray-600 dark:text-white  py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Light/dark mode
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-white  py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  SQL Lite
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-white py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Cross platform
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-white py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Push Notifications
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/work">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Noto;
