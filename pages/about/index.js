/* eslint-disable react/jsx-key */
import React, { useState } from "react";

//icons
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaVuejs,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiExpo,
  SiTypescript,
  SiZoho,
  SiSupabase,
  SiRedux,
  SiPocketbase,
  SiGraphql,
  SiMongodb,
  SiPowerapps,
  SiPowerautomate,
  SiDynamics365,
  SiZapier,
  SiMysql,
  SiSqlite,
  SiTailwindcss,
  SiMaterialdesign,
  SiMiro,
  SiTwilio,
  SiNestjs,
  SiAmazonaws,
  SiRailway,
  SiDocker,
  SiReact,
} from "react-icons/si";
//Components

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//Framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          // eslint-disable-next-line react/jsx-key

          <div class="tooltip">
            <FaHtml5 className="hover:text-[#e34c26]" />
            <span class="tooltiptext">Html</span>
          </div>,
          <div class="tooltip">
            <FaCss3 className="hover:text-[#214CE4] transition-all duration-300" />
            <span class="tooltiptext">CSS</span>
          </div>,
          <div class="tooltip">
            <FaJs className="hover:text-[#F7DF1C] transition-all duration-300" />
            <span class="tooltiptext">Javascript</span>
          </div>,
          <div class="tooltip">
            <FaReact className="hover:text-[#00DCFF] transition-all duration-300" />
            <span class="tooltiptext">React</span>
          </div>,
          <div class="tooltip">
            <SiTailwindcss className="hover:text-[#49ADB3] transition-all duration-300" />
            <span class="tooltiptext">Tailwind</span>
          </div>,
          <div class="tooltip">
            <SiNextdotjs className="hover:text-gray-700 transition-all duration-300" />
            <span class="tooltiptext">Nextjs</span>
          </div>,
          <div class="tooltip">
            <SiTypescript className="hover:text-[#2E78C7] transition-all duration-300" />
            <span class="tooltiptext">Typescript</span>
          </div>,

          <div class="tooltip">
            <SiRedux className="hover:text-[#774ABB] transition-all duration-300" />
            <span class="tooltiptext">Redux</span>
          </div>,
          <div class="tooltip">
            <FaVuejs className="hover:text-[#359f43] transition-all duration-300" />
            <span class="tooltiptext">Vue js</span>
          </div>,
        ],
      },
      {
        title: "Mobile Development",
        icons: [
          // eslint-disable-next-line react/jsx-key
          <div class="tooltip">
            <SiExpo className="transition-all duration-300" />
            <span class="tooltiptext">Expo</span>
          </div>,
          <div class="tooltip">
            <SiReact className="transition-all duration-300" />
            <span class="tooltiptext">React Native</span>
          </div>,
          <div class="tooltip">
            <SiDart />
            <span class="tooltiptext">Dart</span>
          </div>,
          <div class="tooltip">
            <SiFlutter className=" transition-all duration-300" />
            <span class="tooltiptext">Flutter</span>
          </div>,
          <div class="tooltip">
            <SiFirebase className="hover:text-[#FFCB2B] transition-all duration-300" />
            <span class="tooltiptext">Firebase</span>
          </div>,

          <div class="tooltip">
            <SiTwilio className=" hover:text-red-500 transition-all duration-300" />
            <span class="tooltiptext">Twilio</span>
          </div>,
        ],
      },
      {
        title: "Backend",
        icons: [
          // eslint-disable-next-line react/jsx-key

          <div class="tooltip">
            <FaNodeJs className="hover:text-[#6AA45C] transition-all duration-300" />
            <span class="tooltiptext">Node js</span>
          </div>,
          <div class="tooltip">
            <SiNestjs className="hover:text-[#f17d7d] transition-all duration-300" />
            <span class="tooltiptext">Node js</span>
          </div>,
          <div class="tooltip">
            <SiTypescript className="hover:text-[#2E78C7] transition-all duration-300" />
            <span class="tooltiptext">TypeScript</span>
          </div>,
          <div class="tooltip">
            <SiFirebase className="hover:text-[#FFCB2B]  transition-all duration-300" />
            <span class="tooltiptext">Firebase</span>
          </div>,
          <div class="tooltip">
            <SiSupabase className=" hover:text-[#6BCA91] transition-all duration-300" />
            <span class="tooltiptext">Supabase</span>
          </div>,
          <div class="tooltip">
            <SiPocketbase className="transition-all duration-300" />
            <span class="tooltiptext">PocketBase</span>
          </div>,
          <div class="tooltip">
            <SiZapier className="hover:text-[#FF4A00] transition-all duration-300" />
            <span class="tooltiptext">Zapier</span>
          </div>,
          <div class="tooltip">
            <FaAws className="hover:text-[#FF9900] transition-all duration-300" />
            <span class="tooltiptext">AWS</span>
          </div>,
        ],
      },
      {
        title: "CRM",
        icons: [
          // eslint-disable-next-line react/jsx-key

          <div class="tooltip">
            <SiZoho className="hover:text-[#D41C2E] transition-all duration-300" />
            <span class="tooltiptext">ZOHO</span>
          </div>,
          <div class="tooltip">
            <SiPowerapps className="hover:text-[#8F2D86] transition-all duration-300" />
            <span class="tooltiptext">Power Apps</span>
          </div>,
          <div class="tooltip">
            <SiPowerautomate className="hover:text-[#3184F0] transition-all duration-300" />
            <span class="tooltiptext">Power Automate</span>
          </div>,
          <div class="tooltip">
            <SiDynamics365 className="hover:text-[#486DE2] transition-all duration-300" />
            <span class="tooltiptext">Dynamics 365</span>
          </div>,
        ],
      },
      {
        title: "DB & DEVOPS",
        icons: [
          // eslint-disable-next-line react/jsx-key

          <div class="tooltip">
            <SiAmazonaws className="hover:text-[#e5dc35db] transition-all duration-300" />
            <span class="tooltiptext">Amazon web services</span>
          </div>,
          <div class="tooltip">
            <SiRailway className="hover:text-[#945bf0db] transition-all duration-300" />
            <span class="tooltiptext">Railway</span>
          </div>,
          <div class="tooltip">
            <SiDocker className="hover:text-[#945bf0db] transition-all duration-300" />
            <span class="tooltiptext">Docker</span>
          </div>,
          <div class="tooltip">
            <SiMongodb className="hover:text-[#0D9C4F] transition-all duration-300" />
            <span class="tooltiptext">MongoDB</span>
          </div>,
          <div class="tooltip">
            <SiMysql className="hover:text-[#E48E01] transition-all duration-300" />
            <span class="tooltiptext">MySQL</span>
          </div>,
          <div class="tooltip">
            <SiSqlite className="hover:text-red-[#77C4ED] transition-all duration-300" />
            <span class="tooltiptext">SQLite</span>
          </div>,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <div class="tooltip">
            <FaFigma className="hover:text-[#F24D1D] transition-all duration-300" />
            <span class="tooltiptext">Figma</span>
          </div>,
          <div class="tooltip">
            <SiMaterialdesign className="hover:text-[#00AFFE] transition-all duration-300" />
            <span class="tooltiptext">Material design</span>
          </div>,
          <div class="tooltip">
            <SiMiro className="hover:text-[#FFC532] transition-all duration-300" />
            <span class="tooltiptext">Miro</span>
          </div>,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Software Development Lead - Xploy Solutions",
        stage: "2023 - present",
      },
      {
        title: "Software Developer - IDT Corporation",
        stage: "2021 - present",
      },
      {
        title: "Front End Engineer - Version Do",
        stage: "2023 - Dec 2023",
      },
      {
        title: "CRM Software Coordinator - Marmotech",
        stage: "2022 - 2023",
      },
      {
        title: "Workforce Analyst - Scotia GBS",
        stage: "2020 - 2021",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Applied Technologies - Brigham Young University Idaho",
        stage: "present",
      },
      // {
      //   title: "Computer Science Diploma - AV Technical Institute",
      //   stage: "2009",
      // },
      // {
      //   title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
      //   stage: "2006",
      // },
    ],
  },
  {
    title: "References",
    info: [
      {
        title: "Francis Cristina Lebron",
        stage: "Hidden Phone Number",
      },
      {
        title: "Sariah Angomas",
        stage: "Hidden Phone Number",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        <div className="flex-1 flex-col justify-center">
          {/* Text */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Experienced
            <span className="text-accent "> Software</span> Developer
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Experienced software developer with a strong track record of over 3
            years in the industry. Throughout my career, I have successfully
            developed web applications, mobile applications, and CRM systems. My
            passion for coding drives me to deliver efficient and user-friendly
            solutions. I thrive on challenges and continuously seek
            opportunities to grow and innovate in the ever-evolving tech
            landscape. Let&apos;s work together to bring your ideas to life!
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={16} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* lines of codes */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={13038} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Lines of Code Developed
                </div>
              </div>

              {/* Users Engaged with My Solutions" */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1999} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Users using my solutions
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } hover:cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div
                          key={iconIndex}
                          className="text-2xl hover:text-accent text-white"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div className="h-screen lg:h-0 bg-blue-950 mb-40"></div>
    </div>
  );
};

export default About;
