import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const BarberExclusiveApp = () => {
  return (
    <div className="w-screen h-screen bg-primary/60 ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="scale-down"
          src={"/barber.png"}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            Barber Exclsive app
          </h2>
          <h3 className="md:text-3xl font-bold text-white lg:text-xl sm:px-16 xl:px-48 ">
            {" "}
            <span className=" hover:cursor-pointer text-[#61DAFB] bg-[#282C34] p-2 rounded-md">
              React Native
            </span>{" "}
            <span className="hover:cursor-pointer bg-[#14191F] p-2 rounded-md">
              Expo CLI
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
          Experience the future of appointment management with Cruz Barber Exclusive, the premier barber shop in Santo Domingo. Our app is currently undergoing migration from React Native to Flutter, bringing you enhanced performance and a seamless user experience. Discover the convenience of scheduling appointments at your fingertips, effortlessly selecting time slots that suit your schedule. Stay connected by checking the real-time status of your appointments, ensuring you&apos;re always in the loop. As we transition to Flutter, expect a polished and efficient platform that matches the excellence of Cruz Barber Exclusive
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
              href="https://github.com/NicholasMendez11/cruz-barber-exclusive.git"
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
                <p className="text-gray-600dark:text-white  py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Push notifications
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-white py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Cross platform
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

export default BarberExclusiveApp;
