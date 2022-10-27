import React from "react";
import Image from 'next/image';
import Logo from '../public/logo.jpg'
const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-10 ">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#004AAD]">About</p>
          <h2 className="py-4">WHO I AM</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat
            blanditiis vero cupiditate, ducimus nam aliquam, dolorum
            reprehenderit magnam odit saepe repellendus culpa adipisci odio
            consequatur ut corrupti distinctio impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat
            blanditiis vero cupiditate, ducimus nam aliquam, dolorum
            reprehenderit magnam odit saepe repellendus culpa adipisci odio
            consequatur ut corrupti distinctio impedit?

          </p>

            <br/>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat
            blanditiis vero cupiditate, ducimus nam aliquam, dolorum
            reprehenderit magnam odit saepe repellendus culpa adipisci odio
            consequatur ut corrupti distinctio impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat
            blanditiis vero cupiditate, ducimus nam aliquam, dolorum
            reprehenderit magnam odit saepe repellendus culpa adipisci odio
            consequatur ut corrupti distinctio impedit?
          </p>
          <br/>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl bg-gradient-to-r from-[#3a7bd5] to-[#E6DADA]" src={Logo} alt="/" width="600" height="500"/>
        </div>
      </div>
    </div>
  );
};

export default About;
