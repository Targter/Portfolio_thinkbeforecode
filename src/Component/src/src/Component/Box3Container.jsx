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

const ExperienceCard = ({ experience }) => {
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
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Box3Container = () => {
  return (
    <>
      <motion.div
        className="w-full h-auto bg-black relative pt-24 sm:pl-11 pl-2  "
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="w-4/5 h-auto flex flex-col items-center ml-5 sm:ml-11 md:ml-24 mt-11">
          <motion.div variants={textVariant()}>
            <div className="text-sm text-white md:text-lg">
              WHAT I HAVE DONE SO FAR
            </div>
            <div className="md:text-6xl text-4xl text-white md:mt-5 mt-2 md:mb-4 mb-1.5 font-bold md:font-extrabold md:w-full">
              Work Experience
            </div>
          </motion.div>
          <div className="flex md:mt-9 mt-5 flex-wrap flex-col items-start md:items-center w-full"></div>
        </motion.div>
        {/*  */}

        <div className="mt-20 flex flex-col">
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
