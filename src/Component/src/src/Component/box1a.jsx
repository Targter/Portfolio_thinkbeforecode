import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import Interface from "./Interface";
import { Suspense, useState } from "react";
import ScrollManager from "./ScrollManager";

const Box1a = () => {
  const [section, setsection] = useState(0);
  return (
    <>
      <div className=" w-screen h-screen z-0">
        <Canvas shadows camera={{ position: [3, 3, 3], fov: 70 }}>
          <ambientLight intensity={1} />
          <directionalLight
            position={[0.9, 0.5, -2]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={1}
            shadow-camera-near={0.1}
          />
          {/* <group> */}
          <Suspense fallback={null}>
            <OrbitControls enabled={false} />

            <ScrollControls
              damping={0.2}
              maxSpeed={0.5}
              pages={7.4}
              // intensity={1}
            >
              <ScrollManager
                section={section}
                onsectionchange={setsection}
              ></ScrollManager>
              <Scroll>
                {/* <Box1a></Box1a> */}
                {/* <Model
                  section={section}
                  animation={section === 0 ? "Waving" : "Jumping"}
                /> */}
              </Scroll>
              <Scroll html>
                <Interface></Interface>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Box1a;
