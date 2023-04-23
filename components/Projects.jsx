import React from "react";
import Project from "./ProjectItem";
import newsImg from "../public/assets/projects/News.png";
import crypto from "../public/assets/projects/Crypto.png";
import NOTO from "../public/assets/projects/NOTO.png";
import NotoLogo from "../public/assets/projects/NotoLogo.png";
import CRM from '../public/assets/projects/CRM.jpeg'
import music from "../public/assets/projects/Music.png";
import BarberLogo from '../public/assets/projects/barberLogo.jpeg'
import electro from "../public/assets/projects/Electro.jpeg";
const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#004AAD]  dark:text-[#3b88ec]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-4">
          <Project
            title="NOTO APP"
            backgroundImage={NotoLogo}
            projectUrl="/noto"
            projectSummary="React Native App"
          />
          <Project
            title="Barber Exclusive"
            backgroundImage={BarberLogo}
            projectUrl="/BarberExclusiveApp"
            projectSummary="React Native App"
          />
          
          <Project
            title="Mini CRM"
            backgroundImage={CRM}
            projectUrl="/CRM"
          />
          <Project
            title="Electro Store"
            backgroundImage={electro}
            projectUrl="/Electro"
          />
          <Project
            title="News Finder"
            backgroundImage={newsImg}
            projectUrl="/property"
            projectSummary="React js"
          />
          <Project
            title="Crypto checker"
            backgroundImage={crypto}
            projectUrl="/notFound"
          />
          <Project
            title="WikiMusic"
            backgroundImage={music}
            projectUrl="/notFound"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
