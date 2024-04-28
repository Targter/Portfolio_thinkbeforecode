import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./MotionValue";
import { projects } from "./ALLData";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <>
      {" "}
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" bg-tertiary-900 p-5 rounded-2xl sm:w-[360px] w-full border-2"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src="css.png"
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
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
    </>
  );
};
const Box5Container = () => {
  return (
    <>
      <motion.div
        className="w-full h-auto flex items-center justify-center text-white bg-black md:p-24 sm:pl-11"
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="w-11/12 h-auto flex flex-col md:mt-24 mt-14 sm:ml-11 ml-5  md:ml-24 justify-center gap-2">
          {" "}
          <motion.div variants={textVariant()}>
            <div className="text-sm text-white md:text-lg">My Work</div>
            <div className="md:text-6xl text-4xl text-white md:mt-5 mt-2 md:mb-4 mb-1.5 font-bold md:font-extrabold md:w-full">
              Projects
            </div>
          </motion.div>
          <motion.div
            className="mt-3 w-full md:text-lg text-sm"
            variants={fadeIn("", "", 0.1, 1)}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            neque quaerat impedit exercitationem rerum? Atque delectus magni
            dicta beatae sed expedita dignissimos aspernatur minima, dolorum
            doloribus neque voluptates ipsam velit ducimus at aliquid voluptatem
            quasi amet iure ipsa quia adipisci facere cum a? Aspernatur
            recusandae, doloribus temporibus odit sapiente dolores provident hic
            facere harum similique, magnam animi. Reprehenderit eos, et neque
            iure aspernatur
          </motion.div>
          {/* <div className="w-11/12 flex gap-10 md:gap-16 mt-16 md:flex-row flex-col md:ml-0 sm:ml-7 ml-2">
            <div className=" w-56 h-56 md:w-72 md:h-80 roundex-xl bg-white"></div>
            <div className=" w-56 h-56 md:w-72 md:h-80 roundex-xl bg-white"></div>
            <div className=" w-56 h-56 md:w-72 md:h-80 roundex-xl bg-white"></div>
          </div> */}
          <div className="mt-20 flex flex-wrap gap-7">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Box5Container;
