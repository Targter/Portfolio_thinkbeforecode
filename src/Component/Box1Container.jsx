import { Suspense, useLayoutEffect, useRef, useState } from "react";
// import Box1a from "./box1a";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
const Box1Container = () => {
  const modelref = useRef();

  return (
    <>
      <div className="h-auto lg:w-auto w-[800px] flex justify-center flex-col items-center overflow-x-hidden z-50 text-white  ">
        <div className="bg-purple-1000 border-b-2 lg:h-[200px] h-[100px]  w-full overflow-x-hidden ">
          here we pass the menu option or nav bar
        </div>

        <div className="herocontainer lg:w-[1100px] w-[750px] lg:h-[530px] h-[400px] flex flex-col justify-start lg:items-center items-start lg:gap-8 gap-1 text-center">
          <div className="myinfo w-[400px] lg:w-[500px] text-white h-[90px] lg:text-3xl text-xl mt-8 ">
            Providing the best project experience
          </div>

          <div className="myinfo lg:w-10/12 w-1/2 lg:h-[230px] h-[150px] lg:text-7xl text-4xl">
            <span className="lg:ml-0 ml-10 lg:mr-9">Full Stack</span>
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

          <div className="myinfo  lg:w-full w-[200px] lg:h-[100px] h-[50px] flex justify-center">
            <button className="bg-blue-200 h-[70px] w-[300px] rounded-lg text-xl font-bold">
              Download Resume
            </button>
          </div>
          <div className="myinfo lg:w-3/12 w-1/2 h-[200px] lg:text-sm text-lg text-center lg:mt-0 mt-9 ">
            I'm a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </div>
        </div>
      </div>
    </>
  );
};

export default Box1Container;
