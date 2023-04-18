import Image from "next/image";
import React from "react";
import ElectroMain from "../public/assets/projects/ElectroMain.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Electro = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ElectroMain}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            Electro shopping center
          </h2>
          <h3 className="text-3xl font-bold text-white lg:text-xl sm:px-16 xl:px-48 ">
            {" "}
            <span className=" hover:cursor-pointer text-[#61DAFB] bg-[#282C34] p-2 rounded-md">
              React
            </span>{" "}
            <span className="hover:cursor-pointer bg-[#c255ac] p-2 rounded-md">
              Sanity
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
            Welcome to an ecommerce app! We are thrilled to offer you a
            seamless and convenient online shopping experience. Our app is
            designed to make it easy for you to browse and purchase products
            from a wide range of categories, including fashion, electronics,
            home goods, beauty, and more. Our app features a user-friendly
            interface that allows you to search for products, view product
            details and images, and add items to your shopping cart with just a
            few taps. You can also save your favorite products to a wishlist and
            share them with friends and family. ⚒️ Work in Progress...
          </p>
          <button className="px-8 py-2 mt-4 mr-8 font-bold rounded-md bg-gradient-to-r from-[#089ec0] to-[#3a7bd5] cursor-not-allowed text-white">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ecommerce-prototype-iota.vercel.app/"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8 font-bold rounded-md bg-gradient-to-r from-[#089ec0] to-[#3a7bd5] text-white">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/NicholasMendez11/Ecommerce-prototype"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4">
          <div className="p-2 ">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <div>
                <p className="text-gray-600 dark:text-white  py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  React js
                </p>
              </div>
              <div>
                <p className="text-gray-600dark:text-white  py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Sanity
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-white py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Tailwindcss
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-white py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  NEXT JS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 shadow-xl  shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4">
          <div className="p-2 ">
            <p className="text-center font-bold pb-2 ">Features</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <div>
                <p className="text-gray-600 dark:text-white  py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Shopping cart
                </p>
              </div>
              <div>
                <p className="text-gray-600dark:text-white  py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Content Manager
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-white py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Sanity 
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-white py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Responsive
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-white py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                    UI
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Electro;
