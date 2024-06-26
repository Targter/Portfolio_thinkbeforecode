import React, { lazy, Suspense } from "react";
const Animationcomp = lazy(() => import("./box1a"));
const Box1Container = () => {
  console.log("container is printing");
  return (
    <>
      <div
        className="h-auto lg:w-auto w-[1000px] flex lg:flex-row flex-col lg:items-center justify-start items-start overflow-hidden z-50 text-white mb-[120px] "
        id="Home"
      >
        <div className="lg:w-[1100px] w-[100vw] lg:h-[530px] h-auto flex flex-col justify-start items-center gap-8 text-center lg:mt-[100px] mt-[80px]">
          <div className=" w-[400px] lg:w-[500px] text-white lg:h-[90px] h-[20px] lg:text-2xl text-sm lg:mt-8 mt-3">
            Providing the best project experience
          </div>

          <div className=" lg:w-10/12 w-full lg:h-[230px] h-[100px] lg:text-7xl text-4xl">
            <span>Full Stack</span>
            <span className="block"> Software Engineer</span>
          </div>

          <div className="myinfo w-full lg:h-[100px] h-[50px] flex justify-center">
            <button
              className="bg-[#2B2D42] lg:h-[70px] h-[30px] lg:w-[300px] w-[150px] rounded-lg lg:text-xl text-sm  lg:font-bold font-light hover:bg-gray-700 hover:text-white"
              // onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
          <div className="lg:w-3/12 w-full lg:h-[200px] h-auto text-sm text-center lg:p-0 p-2">
            I'm a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </div>
        </div>
        <div className="modeldiv  h-[300px] overflow-hidden  w-[450px] relative top-0 ">
          <Suspense fallback={<div>Loading....</div>}>
            <Animationcomp />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Box1Container;
