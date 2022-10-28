import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import Image from "next/image";
const notFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-screen h-20 flex-rows ">
        {" "}
        <div className=" m-2 md:m-5 ">
        <Link href="/">
        <Image src="/../public/logo.jpg" className="hover:cursor-pointer" alt="/" width="120" height="120" />
        </Link>
       
        </div>
      </div>
      <h1 className="text-center">Workign on it!</h1>
      <Player
        src="https://assets1.lottiefiles.com/packages/lf20_p5bw8zmp.json"
        loop
        className="ml-5 p-3"
        autoplay
      />
      
    </div>
  );
};

export default notFound;
