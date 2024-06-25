import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  const [showDropDown, SetDropDown] = useState(false);
  const ButtonClick = () => {
    SetDropDown(!showDropDown);
    console.log(showDropDown);
  };
  return (
    <>
      {" "}
      <div className="dark:bg-[#2B2D42] h-auto w-full overflow-x-hidden fixed z-[999] text-white mb-2">
        <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={ButtonClick}
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>

                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    class="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4">
                    <a
                      href="#Home"
                      class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#Skills"
                      class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Skills
                    </a>
                    <a
                      href="#WorkExperience"
                      class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Work Experience
                    </a>
                    <a
                      href="#Projects"
                      class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Projects
                    </a>
                  </div>
                </div>
              </div>
              <div class="max-w-screen-xl w-1/2 px-4 py-3  ">
                <div class="flex justify-end items-center">
                  <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li className="w-6 h-6">
                      <a
                        href="https://www.linkedin.com/in/abhaybansal0003/"
                        target="_blank"
                      >
                        <FaLinkedin className="w-[100%] h-[100%] hover:bg-gray-700 hover:text-white" />
                      </a>
                    </li>
                    <li className="w-6 h-6">
                      <a href="mailto:bansalabhay00@gmail.com">
                        <IoMail className="w-[100%] h-[100%] hover:bg-gray-700 hover:text-white" />
                      </a>
                    </li>
                    <li className="w-6 h-6">
                      <a href="https://x.com/AbCheckk" target="_blank">
                        <FaSquareXTwitter className="w-[100%] h-[100%] hover:bg-gray-700 hover:text-white" />
                      </a>{" "}
                    </li>
                    <li className="w-6 h-6">
                      <a href="https://github.com/Targter" target="_blank">
                        <FaGithub className="w-[100%] h-[100%] hover:bg-gray-700 hover:text-white" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`sm:hidden ${showDropDown ? "" : "hidden"}`}
            id="mobile-menu"
          >
            <div class="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#Home"
                class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                aria-current="page"
                onClick={ButtonClick}
              >
                Dashboard
              </a>
              <a
                href="#Skills"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
                onClick={ButtonClick}
              >
                Skills
              </a>
              <a
                href="#WorkExperience"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={ButtonClick}
              >
                Work Experience
              </a>
              <a
                href="#Projects"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={ButtonClick}
              >
                Projects
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
