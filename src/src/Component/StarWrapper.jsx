import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { staggerContainer } from "../utils/motion";

// import { services } from "./ALLData.js";
// import { motion, stagger } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./MotionValue.js";
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative h-4/5 bg-black pl-28 pt-11 overflow-x-hidden`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
