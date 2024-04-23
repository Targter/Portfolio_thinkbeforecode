// import { css, html } from "../assets";

export function slideInFromLeft(delay) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
// import css from "public\texh";
export const techimg = [
  {
    name: "Css",
    imgurl: "css.png",
  },
  {
    name: "html",
    imgurl: "html.png",
  },
  // {
  //   name: "Bootstrap",
  //   imgurl: "download.png",
  // },
  // {
  //   name: "git",
  //   imgurl: "git.png",
  // },
  // {
  //   name: "js",
  //   imgurl: "javascript.png",
  // },
  // {
  //   name: "mongo",
  //   imgurl: "mongo.png",
  // },
  // {
  //   name: "nodejs",
  //   imgurl: "nodejs.png",
  // },
  // {
  //   name: "react",
  //   imgurl: "reactjs.png",
  // },
  // {
  //   name: "redux",
  //   imgurl: "redux.png",
  // },
  // {
  //   name: "tailwind",
  //   imgurl: "tailwind.png",
  // },

  {
    name: "Bootstrap",
    imgurl: "download.png",
  },
  {
    name: "git",
    imgurl: "git.png",
  },
  {
    name: "figma",
    imgurl: "figma.png",
  },
  {
    name: "js",
    imgurl: "javascript.png",
  },
  {
    name: "mongodb",
    imgurl: "mongodb.png",
  },
  {
    name: "nodejs",
    imgurl: "nodejs.png",
  },
  {
    name: "reactjs",
    imgurl: "reactjs.png",
  },
  {
    name: "redux",
    imgurl: "redux.png",
  },
  {
    name: "tailwind",
    imgurl: "tailwind.png",
  },
];
