import React from "react";
// import Tilt from "react-tilt";
import { Tilt } from "react-tilt";

// import { motion } from "framer-motion";
import { motion } from "framer-motion-3d";
import { services } from "./ALLData.js";
import { fadeIn, textVariant } from "./MotionValue.js";
import StarWrapper from "./StarWrapper.jsx";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.5 }}
      className="lg:w-64 w-36  p-[2px] rounded-[20px] bg-indigo-500 box2border"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="rounded-[20px] py-5 px-12 lg:min-h-[280px] min-h-[200px] lg:mx-0 mx-auto flex justify-evenly items-center flex-col box2border2"
      >
        <img
          src={icon}
          alt="web-development"
          className="lg:w-16 lg:h-16 w-9 h-9 object-contain"
        />

        <h3 className="text-white lg:text-[20px] text-sm lg:font-bold font-light text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div
        className={`max-w-7xl w-[100%] mx-auto relative z-0 h-4/5 lg:pl-28  pl-2 pt-11 mb-5 text-white overflow-hidden `}
      >
        <motion.div
          variants={textVariant()}
          className=" lg:flex-none flex flex-col lg:items-start items-center "
        >
          <div className="text-white md:text-lg text-sm">My Work</div>
          <div className="md:text-6xl text-4xl text-white md:mt-5 mt-2 md:mb-4 mb-1.5 font-bold md:font-extrabold md:w-full">
            Projects
          </div>
        </motion.div>
        <motion.div
          className="mt-9 lg:w-2/4 w-full md:text-[16px] text-sm text-white text-justify lg:pr-0 pr-2 "
          variants={fadeIn("", "", 0.6, 1)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          neque quaerat impedit exercitationem rerum? Atque delectus magni dicta
          beatae sed expedita dignissimos aspernatur minima, dolorum doloribus
          neque voluptates ipsam velit ducimus at aliquid voluptatem quasi amet
          iure ipsa quia adipisci facere cum a? Aspernatur recusandae, doloribus
          temporibus odit sapiente dolores provident hic facere harum similique,
          magnam animi. Reprehenderit eos, et neque iure aspernatur
        </motion.div>
        <div className="mt-11 flex flex-wrap lg:gap-10 gap-5 lg:justify-start justify-center">
          {services.map((service, index) => (
            <ServiceCard
              title={service.title}
              index={index}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default About;
// export default StarWrapper(About, "about");
