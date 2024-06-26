import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import Model from "./Model";
import { useState } from "react";

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { motion } from "framer-motion-3d";
//
const LoadingIndicator = () => {
  return <div className="bg-green-600 w-3 h-8">Loading...</div>;
};

function Model(props) {
  const { url, onLoaded } = props;
  const group = useRef();

  const { nodes, materials, animations } = useGLTF(url);
  const { ref, actions, names } = useAnimations(animations);

  useEffect(() => {
    if (actions[names[16]]) {
      actions[names[16]].reset().play();
    }
    if (onLoaded) onLoaded();
    return () => {
      if (names[16] && actions[[names[16]]]) {
        actions[names[16]].stop();
      }
    };
  }, [names, actions, onLoaded]);

  console.log("model is printing");
  return (
    <group position={[0, -1, -3]} ref={ref} zIndex={0}>
      <motion.group ref={group} dispose={null} position={[0, 0, 0]}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.01}
            castShadow
          >
            <group
              name="a6b01319cd2d4308903486c20ea7a079fbx"
              rotation={[Math.PI / 2, 0, 0]}
              castShadow
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Rig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <group name="Object_5">
                      <primitive object={nodes._rootJoint} />
                      <group name="Object_82" scale={0.177} />
                      <skinnedMesh
                        castShadow
                        name="Object_83"
                        geometry={nodes.Object_83.geometry}
                        material={materials.Casual_Male}
                        skeleton={nodes.Object_83.skeleton}
                      />
                    </group>
                  </group>
                  <group name="casual_male001" scale={0.177} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </motion.group>
    </group>
  );
}

//
const Box1a = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleModelLoaded = () => {
    setIsLoading(!isLoading);
  };
  console.log("box is printing");
  return (
    <>
      <span className="h-[290px] absolute lg:top-[-100px] top-[-80px] lg:right-[100px] right-[100px]">
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
      </span>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 40 }}
        className="z-1 absolute top-[-30px] right-[30px]"
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
        <Model url="/scene.gltf" onLoaded={handleModelLoaded} />
        <OrbitControls enabled={false} />
      </Canvas>
      {isLoading && <LoadingIndicator />}
    </>
  );
};

export default Box1a;

{
  /* */
}
