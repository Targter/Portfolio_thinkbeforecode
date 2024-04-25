// import DModel from "./3DModel.jsx";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "../../public/Scene.jsx";
import { BsStars } from "react-icons/bs";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "./MotionValue.js";
import { Canvas } from "@react-three/fiber";
const Box1Container = () => {
  return (
    <>
      <div className="heroContainer overflow-hidden h-auto xl:h-screen w-full max-w-screen relative pl-2 sm:pl-11">
        <video
          src="\video\blackhole.webm"
          // className="navvideo "
          className="navvideo h-full w-full"
          autoPlay
          loop
          muted
        ></video>

        <motion.div
          className="mt-44 z-10  w-full flex justify-between ml-11 sm:ml-24"
          initial={"hidden"}
          animate={"visible"}
        >
          {/* <div className="heroitemcontentcontainer "> */}
          <div className=" h-full w-2/3 flex flex-col py-10 ">
            {/* <motion.div className="resumeName" variants={slideInFromTop}> */}
            {/* <motion.div className="resumeName flex "></motion.div> */}
            <motion.div className="flex h-11 text-white  border-2 w-28 md:w-56  items-center rounded-lg bg-blue-900 ">
              <BsStars className="ml-3" />
              <span className="m-2 text-sm sm:text-lg  ">
                <span className="hidden md:inline">Download </span> Resume
              </span>
            </motion.div>

            {/* <motion.div className="Profession" variants={slideInFromLeft(0.6)}></motion.div> */}
            <motion.div className="w-5/6  text-4xl md:text-7xl text-white mt-7">
              Providing <span className="textcolor">the best</span> project
              experience
            </motion.div>
            <motion.div
              className="text-white my-8 w-60 md:w-96 md:my-4"
              // variants={slideInFromLeft(0.8)}
            >
              I'm a Full Stack Software Engineer with experience in Website,
              Mobile, and Software development. Check out my projects and
              skills.
            </motion.div>

            <motion.button
              className="learnmorebtn"
              variants={slideInFromLeft(1.1)}
            >
              Learn More
            </motion.button>
          </div>

          {/* <motion.div className="" variants={slideInFromRight(0.9)}> */}
          {/* <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <ambientLight />
                <Model />
              </Suspense>
            </Canvas> */}
          {/* imag{" "} */}
          {/* </motion.div> */}
        </motion.div>
      </div>
    </>
  );
};

export default Box1Container;
