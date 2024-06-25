import { Suspense, useLayoutEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Box1a from "./box1a";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
const Box1Container = () => {
  const modelref = useRef();

  const handleDownload = () => {
    const pdfUrl = "public/AbhayResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl; // Replace with the actual path to your file
    link.download = "AbhayBansal_Resume.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      {/* mainbody */}
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
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
          <div className="myinfo lg:w-3/12 w-full lg:h-[200px] h-auto text-sm text-center lg:p-0 p-2">
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

{
  /* <nav class="flex ">
<div class="max-w-screen-xl lg:w-1/2 px-4 py-3 ">
  <div class="flex items-center ml-[100px]">
    <ul class="flex flex-row font-bolder mt-0 space-x-8 rtl:space-x-reverse text-lg">
      <li>
        <a
          href="#Home"
          class="text-gray-900 dark:text-white hover:underline"
          aria-current="page"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#Projects"
          class="text-gray-900 dark:text-white hover:underline"
        >
          MyWork
        </a>
      </li>
      <li>
        <a
          href="#WorkExperience"
          class="text-gray-900 dark:text-white hover:underline"
        >
          Work Experience
        </a>
      </li>
      <li>
        <a
          href="#Projects"
          class="text-gray-900 dark:text-white hover:underline"
        >
          Projects
        </a>
      </li>
    </ul>
  </div>
</div>






// navtag
<div class="max-w-screen-xl w-1/2 px-4 py-3  ">
  <div class="flex justify-end items-center">
    <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
      <li className="w-6 h-6">
        <a
          href="https://www.linkedin.com/in/abhaybansal0003/"
          target="_blank"
        >
          <FaLinkedin className="w-[100%] h-[100%]" />
        </a>
      </li>
      <li className="w-6 h-6">
        <a href="mailto:bansalabhay00@gmail.com">
          <IoMail className="w-[100%] h-[100%]" />
        </a>
      </li>
      <li className="w-6 h-6">
        <a href="https://x.com/AbCheckk" target="_blank">
          <FaSquareXTwitter className="w-[100%] h-[100%]" />
        </a>{" "}
      </li>
      <li className="w-6 h-6">
        <a
          href="https://www.facebook.com/abhay.bansal.94214"
          target="_blank"
        >
          <FaFacebook className="w-[100%] h-[100%]" />
        </a>
      </li>
    </ul>
  </div>
</div>
</nav> */
}
