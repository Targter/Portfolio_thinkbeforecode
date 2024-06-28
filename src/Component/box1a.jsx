import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { lazy, Suspense } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CanvasLoader from "./CanvasLoader";
// import ErrorBoun
import { Preload } from "@react-three/drei";
// const ModelLoader = lazy(() => import("./Model"));
// import Model from "./Model";

import { useGLTF, useAnimations } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { compute } from "three/examples/jsm/nodes/Nodes.js";
// import { animate, useMotionValue } from "framer-motion"

function Model(props) {
  const { url } = props;
  // const group = useRef();

  // const { nodes, materials, animations, scene } = useGLTF(url);
  const { nodes, materials, animations, scene } = useGLTF("./scene.gltf");
  // const { ref, actions, names } = useAnimations(animations);
  // console.log("nodeScene", computer);
  // console.log("animationName", computer.animations[16]);
  // const { nodes, materials, animations,scene } = computer;
  const { ref, actions, names } = useAnimations(animations);

  // useEffect(() => {
  //   if (actions[names[16]]) {
  //     console.log("actionscalled");
  //     actions[names[16]].reset().play();
  //   }

  //   return () => {
  //     if (names[16] && actions[[names[16]]]) {
  //       actions[names[16]].stop();
  //     }
  //   };
  // }, [names, actions]);

  return (
    <mesh ref={ref}>
      <ambientLight color={"white"} intensity={0.3} />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={1.7}
        position={[6, -2.9, -1.5]}
        rotation={[0.1, 1.7, -0.1]}
      />

      {/* <primitive object={nodes._rootJoint} /> */}
      <group name="Object_82" scale={0.177} />
      <skinnedMesh
        castShadow
        name="Object_83"
        geometry={nodes.Object_83.geometry}
        material={materials.Casual_Male}
        skeleton={nodes.Object_83.skeleton}
      />
    </mesh>
  );
}

const Box1a = () => {
  // const [webGLSupported, setWebGLSupported] = useState(true);

  // useEffect(() => {
  //   if (!window.WebGLRenderingContext) {
  //     setWebGLSupported(false);
  //   } else {
  //     const canvas = document.createElement("canvas");
  //     const context =
  //       canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  //     if (!context) {
  //       setWebGLSupported(false);
  //     }
  //   }
  // }, []);

  // if (!webGLSupported) {
  //   return <div>Your device does not support WebGL.</div>;
  // }

  return (
    <>
      {/* <span className="h-[290px] absolute lg:top-[-100px] top-[-80px] lg:right-[100px] right-[100px]">
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

      {/* <Suspense fallback={<div> LoadingModel.....</div>}> */}
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 0, -2.5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          position={[0.9, 0.5, -2]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={1}
          shadow-camera-near={0.1}
        />
        <Suspense fallback={<CanvasLoader />}>
          {/* <ModelLoader url="/scene.gltf" /> */}
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Model url="/scene.gltf" />
        </Suspense>
        <Preload all />
      </Canvas>
      {/* </Suspense> */}
    </>
  );
};

export default Box1a;
