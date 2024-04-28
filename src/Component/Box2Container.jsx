import Box2Cards from "./Box2Cards.jsx";
import { services } from "./ALLData.js";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./MotionValue.js";
const Box2Container = () => {
  return (
    <>
      <motion.div
        className="h-auto w-full flex flex-col items-start p-2 sm:p-11 bg-black "
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="ml-5 sm:ml-11 md:ml-24 mt-3 md:mt-8 h-auto">
          <motion.div variants={textVariant()}>
            <div className=" text-sm text-white md:text-lg ">INTRODUCTION</div>
            <div className="md:text-6xl text-2xl text-white md:mt-2.5 mt-1.5 md:mb-4 mb-1.5 font-semibold md:font-extrabold ">
              Overview
            </div>
          </motion.div>
          <motion.div
            className="w-4/5 md:w-2/3 text-white text-left text-lg "
            variants={fadeIn("", "", 0.1, 1)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem deserunt amet id, velit non aperiam, ipsam maiores
            minima impedit odit est incidunt corporis ab recusandae, voluptatum
            temporibus ducimus eligendi ratione.
          </motion.div>
          <div className="flex gap-1  md:gap-11 flex-wrap w-5/6 flex-row  ">
            {services.map((service, index) => (
              <Box2Cards
                index={index}
                title={service.title}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Box2Container;
