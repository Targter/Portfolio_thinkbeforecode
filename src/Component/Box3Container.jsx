// for this i have to import vertical timecomponet from react
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "./MotionValue";
import { experiences } from "./ALLData";
import StarWrapper from "./StarWrapper";
import React from "react";

const ExperienceCard = React.memo(({ experience }) => {
  // const { experience } = props;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center lg:w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      className="lg:w-full w-[95%] h-auto"
    >
      <div>
        <h3 className="text-white lg:text-[24px] text-lg font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary lg:text-[16px] text-sm font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="lg:mt-5 mt-3 list-disc lg:ml-5 ml-2 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 lg:text-[14px] text-[12px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});

const Box3Container = () => {
  console.log("container 3");
  return (
    <>
      <motion.div
        className="w-full h-auto bg-black relative lg:pt-24 pt-0 lg:pl-11 pl-2  "
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        id="WorkExperience"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="lg:w-4/5 w-full h-auto flex flex-col items-center ml-1 lg:ml-11 md:ml-24 mt-11">
          <motion.div variants={textVariant()}>
            <div className="text-sm text-white md:text-lg ">
              WHAT I HAVE DONE SO FAR
            </div>
            <div className="md:text-6xl text-4xl text-white md:mt-5 mt-2 md:mb-4 mb-1.5 font-bold md:font-extrabold md:w-full">
              Work Experience
            </div>
          </motion.div>
          <div className="flex md:mt-9 mt-5 flex-wrap flex-col items-start md:items-center w-full"></div>
        </motion.div>

        <div className="lg:mt-20 mt-8 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </>
  );
};

// export default Box3Container;

export default StarWrapper(Box3Container, "work");

// <div className="h-auto flex w-full md:w-2/3 relative">
// {
/* <div className="w-44 h-44 sm:w-64 sm:h-64 md:w-96 md:h-80 border-2 mt-8 md:mt-16"></div>
<div>
  <div className="w-1 h-52 sm:h-72 md:h-96 bg-white ml-12 md:ml-16 relative"></div>
  <div className="circle w-12 h-12 rounded-full absolute border-2 top-14 md:top-16 left-100 ml-6 md:ml-10"></div>
</div>
</div>{" "}
<div className="h-auto flex w-full md:w-2/3 relative">
<div className="w-44 h-44 sm:w-64 sm:h-64 md:w-96 md:h-80 border-2 mt-8 md:mt-16"></div>
<div>
  <div className="w-1 h-52 sm:h-72 md:h-96 bg-white ml-12 md:ml-16 relative"></div>
  <div className="circle w-12 h-12 rounded-full absolute border-2 top-14 md:top-16 left-100 ml-6 md:ml-10"></div>
</div>
</div>{" "}
<div className="h-auto flex w-full md:w-2/3 relative">
<div className="w-44 h-44 sm:w-64 sm:h-64 md:w-96 md:h-80 border-2 mt-8 md:mt-16"></div>
<div>
  <div className="w-1 h-52 sm:h-72 md:h-96 bg-white ml-12 md:ml-16 relative"></div>
  <div className="circle w-12 h-12 rounded-full absolute border-2 top-14 md:top-16 left-100 ml-6 md:ml-10"></div>
</div>
</div>{" "}
<div className="h-auto flex w-full md:w-2/3 relative">
<div className="w-44 h-44 sm:w-64 sm:h-64 md:w-96 md:h-80 border-2 mt-8 md:mt-16"></div>
<div>
  <div className="w-1 h-52 sm:h-72 md:h-96 bg-white ml-12 md:ml-16 relative"></div>
  <div className="circle w-12 h-12 rounded-full absolute border-2 top-14 md:top-16 left-100 ml-6 md:ml-10"></div>
</div>
</div>{" "} */
// }
