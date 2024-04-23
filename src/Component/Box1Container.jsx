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
      <div className="heroContainer">
        <video
          src="\video\blackhole.webm"
          className="navvideo"
          autoPlay
          loop
          muted
        ></video>

        <motion.div
          className="HeroContent"
          initial={"hidden"}
          animate={"visible"}
        >
          <div className="heroitemcontentcontainer">
            {/* <motion.div className="resumeName" variants={slideInFromTop}> */}
            <motion.div className="resumeName">
              <BsStars className="sparkles" />
              <span className="name"> Download Resume</span>
            </motion.div>

            {/* <motion.div className="Profession" variants={slideInFromLeft(0.6)}></motion.div> */}
            <motion.div className="Profession">
              Providing <span className="textcolor">the best</span> project
              experience
            </motion.div>
            <motion.div className="description" variants={slideInFromLeft(0.8)}>
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

          <motion.div
            className="rightcontainerModel"
            variants={slideInFromRight(0.9)}
          >
            {/* <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <ambientLight />
                <Model />
              </Suspense>
            </Canvas> */}
            {/* imag{" "} */}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Box1Container;
