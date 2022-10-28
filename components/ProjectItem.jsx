import React from "react";
import Image from "next/image";
import Link from "next/link";


const ProjectItem = ({title,backgroundImage,projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4 group hover:bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]">
      <Image
        height='1100px'
        className="rounded-xl group-hover:opacity-10 ease-in duration-200 hover:cursor-pointer"
        src={backgroundImage}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h2>
        <p className="pb-4 pt-2 text-white text-center"> React js project</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
