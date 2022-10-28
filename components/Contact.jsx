import Image from "next/image";
import React from "react";
import Me from "../public/me.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link as Scroll } from "react-scroll";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w[1240px] m-auto px-9 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {" "}
          Contact
        </p>
        <h2 className="py-4">Keep in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full rounded-xl shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Player
                  src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                  loop
                  autoplay
                />
              </div>
              <div>
                <p className="py-4 font-bold text-center">
                  {" "}
                  I am available for mid and full-time possition. <br />
                  Feel free to reach me out and let&apos;s talk{" "}
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-center">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursosr-pointer hover:scale-110 hover:cursor-pointer ease-in duration-500">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursosr-pointer hover:scale-110 hover:cursor-pointer ease-in duration-500">
                      <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursosr-pointer hover:scale-110 hover:cursor-pointer ease-in duration-500">
                      <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursosr-pointer hover:scale-110 hover:cursor-pointer ease-in duration-500">
                      <BsFillPersonLinesFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid  md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <textarea
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows="10"
                  />
                </div>
                <button className="w-full p-4 mt-5 text-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursosr-pointer hover:scale-110 hover:cursor-pointer ease-in duration-500">
            <Scroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Player
                src="https://assets5.lottiefiles.com/packages/lf20_YUUKAZ.json"
                loop
                autoplay
                
              />
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
