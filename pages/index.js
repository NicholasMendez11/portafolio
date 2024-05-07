import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
//motion
import { easeInOut, motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-screen w-screen mt-10 lg:mt-0 overflow-hidden leading-relaxed">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-2 text-[45px]"
          >
            Crafting Innovative Solutions <br />
            with{" "}
            <TypeAnimation
              sequence={[
                "React",
                1000,
                "React Native",
                1000,
                "Node JS",
                1000,
                "Nest JS",
                1000,
                "Next JS",
                1000,
                "Expo SDK",
                1000,
                "Javascript",
                1000,
                "Typescript",
                1000,
                "Tailwind CSS",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-accent text-[40px]"
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            {/* <span className="text-accent"> Flutter, React and </span> */}
            {/* <span className=" text-accent cursor-pointer">more</span> */}
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            With years of experience in the tech industry, I am dedicated to
            turning unique ideas into outstanding digital solutions. My
            expertise spans developing smooth web applications, engaging mobile
            apps, and reliable CRM and ERP systems. I've collaborated with
            diverse clients to bring technological visions to reality, enhancing
            user engagement and business efficiency. Let's connect and explore
            how we can elevate your next project through innovative technology
            and deep industry knowledge!
          </motion.p>
          {/* btn */}
          <div className=" justify-center xl:hidden lg:flex hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div>{/* image */}</div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <div>
          <ParticlesContainer />
        </div>
        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
