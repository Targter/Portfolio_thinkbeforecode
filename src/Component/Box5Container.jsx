import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./MotionValue";
import { projects } from "./ALLData";
import { Tilt } from "react-tilt";
import StarWrapper from "./StarWrapper";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="p-5  lg:rounded-2xl rounded-xl lg:w-[360px] w-[80%] bg-[rgb(21 16 48)] bg-[#1d1836] lg:ml-0 ml-8 lg:flex-none flex flex-col lg:items-start items-center overflow-hidden"
      >
        <div className="relative lg:w-[100%] w-[80px] lg:h-[230px] h-[120px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl overflow-hidden"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                // src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain lg:ml-0 ml-[120px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 lg:text-start text-center">
          <h3 className="text-white font-bold text-[24px] ">{name}</h3>
          <p className="mt-2 text-stone-100 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-white">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Box5Container = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="overflow-hidden lg:flex-none flex flex-col lg:items-start items-center lg:mt-0 mt-11"
        id="Projects"
      >
        <p className="text-sm text-white md:text-lg">My work</p>
        <h2 className="md:text-6xl text-4xl text-white md:mt-5 mt-2 md:mb-4 mb-1.5 font-bold md:font-extrabold md:w-full">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex overflow-hidden">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-white overflow-hidden lg:pl-0 pl-2 lg:text-start text-justify 
          lg:pr-0 pr-2"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="lg:mt-20 h-auto mt-10 flex flex-wrap  lg:gap-7 gap-5 mb-11 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// export default Box5Container;
export default StarWrapper(Box5Container, "projectbox");
