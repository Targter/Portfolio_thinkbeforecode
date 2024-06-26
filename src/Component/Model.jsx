// import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";
// import { motion } from "framer-motion-3d";
// // import { animate, useMotionValue } from "framer-motion";

// function Model(props) {
//   const { url } = props;
//   // const group = useRef();

//   // const { nodes, materials, animations, scene } = useGLTF(url);
//   const computer = useGLTF("./scene.gltf");
//   // const { ref, actions, names } = useAnimations(animations);
//   console.log("nodeScene", computer.scene);

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <ambientLight color={"white"} intensity={0.3} />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={0.07}
//         position={[0, -3, -2.2]}
//         rotation={[-0.01, -0.02, -0.1]}
//       />
//     </mesh>
//   );
// }

// export default Model;

// useEffect(() => {
//   if (actions[names[16]]) {
//     actions[names[16]].reset().play();
//   }

//   return () => {
//     if (names[16] && actions[[names[16]]]) {
//       actions[names[16]].stop();
//     }
//   };
// }, [names, actions]);

//

// if (!nodes || !materials || !animations) {
//   return null;
// }

// /

// <group position={[0, -1, -3]} ref={ref} zIndex={0}>
//   <motion.group ref={group} dispose={null} position={[0, 0, 0]}>
//     <group name="Sketchfab_Scene">
//       <group
//         name="Sketchfab_model"
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={0.01}
//         castShadow
//       >
//         <group
//           name="a6b01319cd2d4308903486c20ea7a079fbx"
//           rotation={[Math.PI / 2, 0, 0]}
//           castShadow
//         >
//           <group name="Object_2">
//             <group name="RootNode">
//               <group name="Rig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
//                 <group name="Object_5">
//                   <primitive object={nodes._rootJoint} />
//                   <group name="Object_82" scale={0.177} />
//                   <skinnedMesh
//                     castShadow
//                     name="Object_83"
//                     geometry={nodes.Object_83.geometry}
//                     material={materials.Casual_Male}
//                     skeleton={nodes.Object_83.skeleton}
//                   />
//                 </group>
//               </group>
//               <group name="casual_male001" scale={0.177} />
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   </motion.group>
// </group>
