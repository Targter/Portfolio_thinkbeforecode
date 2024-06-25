import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useScroll, useFBX } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
// import { animate, useMotionValue } from "framer-motion";
function Model(props) {
  // const { section, animation } = props;
  const { url } = props;
  const group = useRef();
  // const [isScrolling, setIsScrolling] = useState("false");
  // Load the GLTF model and extract nodes, materials, and animations
  // loading animation from fbx file

  // const { animations: WavingAnimation } = useFBX("animtions/Waving (3).fbx");
  // const { animations: JumpingAnimation } = useFBX("animtions/Jumping Up.fbx");

  // // console.log("these are the animation", animations);

  const { nodes, materials, animations } = useGLTF(url);
  const { ref, actions, names } = useAnimations(animations);
  // const { viewport } = useThree();

  // useEffect(() => {
  //   if (actions[names[3]]) {
  //     // Initialize animations
  //     actions[names[14]].time = actions[names[14]].getClip().duration;
  //     // actions[names[3]].setEffectiveTimeScale(-0.3);
  //     actions[names[14]].reset().play();
  //     actions[names[14]].setLoop(THREE.LoopOnce);

  //     // actions[names[14]].reset().fadeIn(0.5).play();
  //   }
  //   return () => {
  //     // Clean up animations
  //     actions[names[14]].stop();
  //     // if (actions[names[16]]) actions[names[16]].stop();
  //   };
  // }, []);

  useEffect(() => {
    // actions[names[16]].time = actions[names[16]].getClip().duration;
    if (actions[names[16]]) {
      actions[names[16]].reset().play();
    }
    return () => {
      actions[names[16]].stop();
    };
  }, []);
  //   ?

  return (
    <group position={[0, -1, -3]} ref={ref} zIndex={0}>
      <motion.group ref={group} {...props} dispose={null} position={[0, 0, 0]}>
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

export default Model;

// const cameraPositionX = useMotionValue();
// const cameraLookAtX = useMotionValue();
// const cameraPositionY = useMotionValue();
// const cameraLookAtY = useMotionValue();

// useEffect(() => {
//   //
//   animate(cameraPositionX, section === 1 ? 0.9 : 2);
//   animate(cameraLookAtX, section === 1 ? 0 : 0);
//   animate(cameraPositionY, section === 1 ? 0 : 1);
//   animate(cameraLookAtY, section === 1 ? -1 : 0.3);
// }, [section]);

// useFrame((state) => {
//   state.camera.position.x = cameraPositionX.get();
//   state.camera.position.y = cameraPositionY.get();
//   state.camera.lookAt(cameraLookAtX.get(), cameraLookAtY.get(), 0);
// });
// // console.log("animationName", actions[animation]);
// // // Featured
// useEffect(() => {
//   // const action = actions[animation];
//   if (animation === "Waving") {
//     console.log(`Playing animation: ${animation}`);

//     actions[names[3]].reset().fadeIn(0.5).play();
//     actions[names[3]].time = actions[names[3]].getClip().duration;
//     actions[names[3]].setEffectiveTimeScale(-0.3);
//     actions[names[3]].setLoop(THREE.LoopOnce);
//     return () => {
//       console.log(`Stopping animation: ${animation}`);
//       actions[names[3]].fadeOut(0.5);
//     };
//   } else if (animation === "Jumping") {
//     console.log(`Playing animation: ${animation}`);

//     // actions[names[6]].time = actions[names[6]].getClip().duration;
//     // actions[names[6]].setEffectiveTimeScale(-0.3);
//     actions[names[6]].reset().fadeIn(0.5).play();
//     actions[names[6]].setLoop(THREE.LoopOnce);
//     return () => {
//       console.log(`Stopping animation: ${animation}`);
//       actions[names[6]].fadeOut(0.5);
//     };
//   } else {
//     console.warn(`Animation action not found: ${animation}`);
//   }
// }, [animation, actions]);

//

// another waving animation

// useEffect(() => {
//   if (scroll) {
//     setIsScrolling(true);
//     console.log("set scrolling ");
//   } else {
//     setIsScrolling(false);
//     console.log("scrolling false");
//   }
// }, [isScrolling]);
// useEffect(() => void (actions[names[6]].reset().play().paused = true), []);
// useFrame(() => {
//   if (scroll == 0) {
//     actions[names[3]].reset().fadeIn(0.5).play();
//   }
//   if (isScrolling) {
//     if (actions[names[6]]) {
//       actions[names[6]].time =
//         actions[names[6]].getClip().duration * scroll.offset;
//       // console.log(actions[names[6]].time);
//     }
//   }
// });
