import { Suspense, useLayoutEffect, useRef, useState } from "react";
import Box1a from "./box1a";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
const Box1Container = () => {
  const modelref = useRef();

  return (
    <>
      <div className="bg-purple-1000 border-b-2 lg:h-[200px] h-[100px]  w-full overflow-x-hidden text-white">
        here we pass the menu option or nav bar
      </div>
      <div className="h-auto lg:w-auto w-[1000px] flex lg:flex-row flex-col lg:items-center justify-start items-start overflow-hidden z-50 text-white  ">
        <div className="lg:w-[1100px] w-[100vw] lg:h-[530px] h-auto flex flex-col justify-start items-center gap-8 text-center ">
          <div className=" w-[400px] lg:w-[500px] text-white lg:h-[90px] h-[20px] lg:text-3xl text-lg lg:mt-8 mt-3">
            Providing the best project experience
          </div>

          <div className=" lg:w-10/12 w-full lg:h-[230px] h-[100px] lg:text-7xl text-4xl">
            <span>Full Stack</span>
            <span className="block"> Software Engineer</span>
          </div>

          <div className="myinfo w-full lg:h-[100px] h-[50px] flex justify-center">
            <button className="bg-[#1d1836] lg:h-[70px] h-[30px] lg:w-[300px] w-[150px] rounded-lg lg:text-xl text-sm lg:font-bold font-light">
              Download Resume
            </button>
          </div>
          <div className="myinfo lg:w-3/12 w-full lg:h-[200px] h-auto text-sm text-center">
            I'm a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </div>
        </div>
        <div className="modeldiv  h-[300px] overflow-hidden  w-[450px] relative top-0 ">
          {/* <span className="h-[290px] absolute lg:top-[38%] top-[45%] lg:right-[80px] right-[0px]">
            <svg
              viewBox="10 0 200 100"
              className="h-auto flex justify-center items-center"
              xmlns="http://www.w3.org/2000/svg"
              width={290}
              height={350}
            >
              <path
                fill="#fff"
                d="M71.7,-19.3C80.2,2.7,65.4,36.2,40.9,53.3C16.4,70.4,-17.9,71.1,-40.7,54.8C-63.5,38.5,-74.9,5.2,-66.2,-17.1C-57.5,-39.4,-28.7,-50.7,1.4,-51.2C31.6,-51.7,63.3,-41.3,71.7,-19.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </span> */}
          <Box1a />
        </div>
      </div>
    </>
  );
};

export default Box1Container;
