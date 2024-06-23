import { Suspense, useLayoutEffect, useRef, useState } from "react";
// import Box1a from "./box1a";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
const Box1Container = () => {
  const modelref = useRef();

  return (
    <>
      <div className="bg-purple-1000 border-b-2 lg:h-[200px] h-[100px]  w-full overflow-x-hidden text-white">
        here we pass the menu option or nav bar
      </div>
      <div className="h-auto lg:w-auto w-[1000px] flex justify-center  flex-col lg:items-center items-start overflow-x-hidden z-50 text-white  ">
        <div className="lg:w-[1100px] w-[100vw] lg:h-[530px] h-[calc(100vh-100px)] flex flex-col justify-start items-center gap-8 text-center  bg-red-800">
          <div className=" w-[400px] lg:w-[500px] text-white lg:h-[90px] h-[20px] lg:text-3xl text-lg lg:mt-8 mt-3">
            Providing the best project experience
          </div>

          <div className=" lg:w-10/12 w-full lg:h-[230px] h-[100px] lg:text-7xl text-4xl">
            <span>Full Stack</span>
            {/* <span className="inline-block">
              <span className="w-[100px] h-[85px] inline-block">
                <svg
                  viewBox="0 0 250 200"
                  xmlns="http://www.w3.org/2000/svg"
                  height="180"
                  width="200"
                  className="relative top-[-50px] left-[10px]"
                >
                  <path
                    fill="#FF0066"
                    d="M71.7,-19.3C80.2,2.7,65.4,36.2,40.9,53.3C16.4,70.4,-17.9,71.1,-40.7,54.8C-63.5,38.5,-74.9,5.2,-66.2,-17.1C-57.5,-39.4,-28.7,-50.7,1.4,-51.2C31.6,-51.7,63.3,-41.3,71.7,-19.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </span> */}
            <span className="block"> Software Engineer</span>
          </div>

          <div className="myinfo w-full lg:h-[100px] h-[50px] flex justify-center">
            <button className="bg-blue-200 lg:h-[70px] h-[30px] lg:w-[300px] w-[150px] rounded-lg lg:text-xl text-sm lg:font-bold font-light">
              Download Resume
            </button>
          </div>
          {/* <div className="myinfo lg:w-3/12 w-1/2 h-[200px] lg:text-sm text-lg text-center lg:mt-0 mt-9 ">
            I'm a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </div> */}
          <div className="bg-white lg:h-0 h-[400px] w-full "></div>
        </div>
      </div>
    </>
  );
};

export default Box1Container;
