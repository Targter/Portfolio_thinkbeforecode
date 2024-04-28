import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./MotionValue";
const Box2Cards = ({ index, title, icon }) => {
  return (
    <>
      <Tilt>
        <motion.div
          className="mr-3 md:mr-0 w-60 h-72 rounded-lg border-2 border-amber-50 mt-11 bg-black-900  shadow-card p-[1px]"
          variants={fadeIn("right", "spring", index * 0.5, 1)}
        >
          <div
            className=" rounded-[20px] py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col bg-tertiary"
            options={{ max: 45, scale: 1, speed: 450 }}
          >
            <img src={icon} alt="" className="w-11 h-11 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

export default Box2Cards;
