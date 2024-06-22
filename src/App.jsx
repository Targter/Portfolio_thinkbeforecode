import "./App.css";
// import StarCanvas from "./Component/StarBackground";
// import { Canvas } from "@react-three/fiber";
// import { ScrollControls, Scroll, OrbitControls } from "@react-three/drei";
// import Model from "./Component/Model";
// import Interface from "./Component/Interface";
// import { Suspense, useState } from "react";
// import ScrollManager from "./Component/ScrollManager";
import Box1a from "./Component/box1a";
import Box3Container from "./Component/Box3Container";
import Box4Container from "./Component/Box4Container";
import Box5Container from "./Component/Box5Container";
import Box6container from "./Component/Box6Container";
// import Box1a from "./Component/box1a";
// i am trying to put a 3d model thats why i am doing this :
function App() {
  // const [section, setsection] = useState(0);

  // console.log();
  return (
    <>
      <div className="bg-black h-auto w-screen ">
        <Box1a></Box1a>
        {/* <Box4Container /> */}
      </div>
      {/* <Box3Container />
      <Box5Container />
      <Box6container /> */}
    </>
  );
}

export default App;

/* <>
      {/* camera={{ position: [0.9, 1.5, 2], fov: 70 }}
      <div className=" w-screen h-screen z-10  ">
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
          {/* <group> 
          <Suspense fallback={null}>
            <OrbitControls enabled={false} />

            <ScrollControls damping={0.2} maxSpeed={0.5} pages={7.4}>
              <ScrollManager
                section={section}
                onsectionchange={setsection}
              ></ScrollManager>
              <Scroll>
                <Model
                  section={section}
                  animation={section === 0 ? "Waving" : "Jumping"}
                />
              </Scroll>
              <Scroll html>
                <Interface></Interface>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </> */
