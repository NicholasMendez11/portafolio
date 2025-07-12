/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useTranslations } from '../_app';

//icons
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaVuejs,
  FaAws,
  FaRobot,
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
  SiTwilio,
  SiNestjs,
  SiAmazonaws,
  SiRailway,
  SiDocker,
  SiReact,
  SiOpenai,
  SiTensorflow,
  SiPython,
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
        title: "AI Development",
        icons: [
          // eslint-disable-next-line react/jsx-key

          <div class="tooltip">
            <SiOpenai className="hover:text-[#4ca26e] transition-all duration-300" />
            <span class="tooltiptext">OpenAI MCP</span>
          </div>,
          <div class="tooltip">
            <FaRobot className="hover:text-[#DE8E12] transition-all duration-300" />
            <span class="tooltiptext">Anthropic MCP</span>
          </div>,
          <div class="tooltip">
            <SiTensorflow className="hover:text-[#FF6600] transition-all duration-300" />
            <span class="tooltiptext">TensorFlow</span>
          </div>,
          <div class="tooltip">
            <SiPython className="hover:text-[#3776AB] transition-all duration-300" />
            <span class="tooltiptext">Python AI</span>
          </div>,
        ],
      },
      {
        title: "Database & Cloud",
        icons: [
          // eslint-disable-next-line react/jsx-key

          <div class="tooltip">
            <SiMongodb className="hover:text-[#4DB33D] transition-all duration-300" />
            <span class="tooltiptext">MongoDB</span>
          </div>,
          <div class="tooltip">
            <SiMysql className="hover:text-[#00618A] transition-all duration-300" />
            <span class="tooltiptext">MySQL</span>
          </div>,
          <div class="tooltip">
            <SiSqlite className="hover:text-[#1F7FBE] transition-all duration-300" />
            <span class="tooltiptext">SQLite</span>
          </div>,
          <div class="tooltip">
            <SiGraphql className="hover:text-[#e535ab] transition-all duration-300" />
            <span class="tooltiptext">GraphQL</span>
          </div>,
          <div class="tooltip">
            <SiAmazonaws className="hover:text-[#FF9900] transition-all duration-300" />
            <span class="tooltiptext">AWS</span>
          </div>,
          <div class="tooltip">
            <SiDocker className="hover:text-[#2496ED] transition-all duration-300" />
            <span class="tooltiptext">Docker</span>
          </div>,
          <div class="tooltip">
            <SiRailway className="hover:text-[#0C0C0C] transition-all duration-300" />
            <span class="tooltiptext">Railway</span>
          </div>,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Development Lead",
        stage: "Xploy Solutions",
      },
      {
        title: "Senior Full Stack Developer",
        stage: "Doral Health Wellness",
      },
      {
        title: "Senior Software Developer",
        stage: "IDT Corporation",
      },
      {
        title: "Senior Software Developer",
        stage: "Marmotech",
      },
      {
        title: "Workforce Analyst",
        stage: "Scotia GBS",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "BS in Applied Technologies - Brigham Young University Idaho - In Progress",
        stage: "",
      },
    ],
  },
  {
    title: "references",
    info: [
      {
        title: "IDT Corporation",
        references: [
          {
            name: "Alfania Mendoza",
            title: "Team Manager IDT/CITC",
            linkedin: "https://www.linkedin.com/in/alfania-mendoza-36b7a7138/",
          },
          {
            name: "Oussama Elhaddad",
            title: "Senior Software Developer",
            linkedin: "https://www.linkedin.com/in/oussama-elhaddad-9a2b04104/",
          },
        ],
      },
      {
        title: "Xploy Solutions",
        references: [
          {
            name: "Obed Garcia",
            title: "Senior Mobile Developer",
            linkedin: "https://www.linkedin.com/in/obed-garcia-6a908b194/",
          },
          {
            name: "Winston Pichardo",
            title: "Senior Web Developer",
            linkedin: "https://www.linkedin.com/in/winston-pichardo-9a1a42179/",
          },
        ],
      },
      {
        title: "Doral Health Wellness",
        references: [
          {
            name: "Starlin Gil",
            title: "Senior Software Developer",
            linkedin: "https://www.linkedin.com/in/starlin-gil-01b58b125/",
          },
          {
            name: "Gorakshnath Kharde",
            title: "Senior Software Developer",
            linkedin: "https://www.linkedin.com/in/gorakshnath-kharde-1b0a3b1a7/",
          },
        ],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const t = useTranslations('about');
  const tStats = useTranslations('stats');
  const tExperience = useTranslations('experience');
  const tReferences = useTranslations('references');

  console.log(index);
  return (
    <div className="min-h-screen bg-primary/30 pt-24 pb-24 xl:py-32 text-left xl:pb-8">
      <div className="hidden xl:block">
        <Circles />
      </div>
      {/* Avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] z-0"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto flex flex-col xl:flex-row px-4 xl:px-0 gap-8 xl:gap-0 mt-10">
        <div className="flex-1 flex flex-col justify-start xl:justify-center">
          {/* Text */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mb-6 xl:mb-12"
          >
            {t('description')}
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mb-6 xl:mb-12"
          >
            {t('detailedDescription')}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex md:max-w-xl xl:max-w-none mb-6 overflow-x-auto pb-2"
          >
            <div className="flex flex-1 gap-x-3 xl:gap-x-6 min-w-max">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 min-w-[80px]">
                <div className="text-xl xl:text-4xl font-extrabold text-accent mb-1 xl:mb-2">
                  {tStats('years')}
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.2] xl:leading-[1.4] max-w-[80px] xl:max-w-[100px]">
                  {t('yearsExperience')}
                </div>
              </div>
              {/* enterprise solutions */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 min-w-[80px]">
                <div className="text-xl xl:text-4xl font-extrabold text-accent mb-1 xl:mb-2">
                  {tStats('projects')}
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.2] xl:leading-[1.4] max-w-[80px] xl:max-w-[100px]">
                  {tStats('solutions')}
                </div>
              </div>
              {/* system integrations */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 min-w-[80px]">
                <div className="text-xl xl:text-4xl font-extrabold text-accent mb-1 xl:mb-2">
                  {tStats('integrations')}
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.2] xl:leading-[1.4] max-w-[80px] xl:max-w-[100px]">
                  {tStats('systemIntegrations')}
                </div>
              </div>

              {/* project success rate */}
              <div className="relative flex-1 min-w-[80px]">
                <div className="text-xl xl:text-4xl font-extrabold text-accent mb-1 xl:mb-2">
                  {tStats('success')}
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.2] xl:leading-[1.4] max-w-[80px] xl:max-w-[100px]">
                  {tStats('successRate')}
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
          className="flex flex-col w-full xl:max-w-[48%] xl:h-[480px]"
        >
          <div className="flex gap-x-2 xl:gap-x-8 mb-4 overflow-x-auto overflow-y-hidden">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } hover:cursor-pointer capitalize text-sm xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 whitespace-nowrap`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title === 'skills' ? t('skills') : 
                   item.title === 'experience' ? t('experience') :
                   item.title === 'credentials' ? t('credentials') :
                   item.title === 'references' ? t('references') : item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-3 flex flex-col gap-y-4 xl:gap-y-3 items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col w-full gap-y-1 items-start text-white/60"
                >
                  {/* title */}
                  <div className="font-semibold text-white text-sm">
                    {item.title}
                  </div>
                  {/* company or references */}
                  {item.stage && (
                    <div className="text-accent text-xs font-medium">
                      {item.stage}
                    </div>
                  )}
                  {/* references with tooltips */}
                  {item.references && (
                    <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
                      {item.references.map((ref, refIndex) => (
                        <div key={refIndex} className="tooltip relative group">
                          <a
                            href={ref.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent text-xs font-medium cursor-pointer hover:text-white transition-colors duration-300"
                          >
                            {ref.name}
                          </a>
                          <div className="absolute pr-14 right-0 hidden group-hover:flex">
                            <div className="bg-white relative flex text-primary items-center p-[4px] rounded-[3px] shadow-lg">
                              <div className="text-[10px] leading-none font-semibold whitespace-nowrap">
                                {ref.title}
                              </div>
                              {/* triangle */}
                              <div className="border-solid border-l-white border-l-6 border-y-transparent border-y-[4px] border-r-0 absolute -right-1.5"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* icons */}
                  <div className="flex gap-x-3 gap-y-2 mt-1 flex-wrap justify-start">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div
                          key={iconIndex}
                          className="text-lg hover:text-accent text-white transition-colors duration-300"
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
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}

export default About;
