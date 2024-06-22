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
      className="w-64  p-[1px] rounded-[20px] bg-indigo-500 box2border"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col box2border2"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
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
        className={`max-w-7xl mx-auto relative z-0 h-4/5 pl-28 pt-11 mb-5 text-white overflow-hidden`}
      >
        <motion.div variants={textVariant()} className="z-0">
          <div className="text-sm text-white md:text-lg">My Work</div>
          <div className="md:text-6xl text-4xl text-white md:mt-5 mt-2 md:mb-4 mb-1.5 font-bold md:font-extrabold md:w-full">
            Projects
          </div>
        </motion.div>
        <motion.div
          className="mt-9 w-2/4 md:text-[16px] text-sm text-white "
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
        <div className="mt-11 flex flex-wrap gap-10">
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
