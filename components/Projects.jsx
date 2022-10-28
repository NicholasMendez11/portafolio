import React from "react";
import Project from "./ProjectItem";
import newsImg from "../public/assets/projects/News.png";
import crypto from "../public/assets/projects/Crypto.png";
import music from "../public/assets/projects/Music.png";
const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <Project
            title="News Finder"
            backgroundImage={newsImg}
            projectUrl="/property"
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
