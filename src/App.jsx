import "./App.css";
// import StarCanvas from "./Component/StarBackground";
// import { Canvas } from "@react-three/fiber";
// import { ScrollControls, Scroll, OrbitControls } from "@react-three/drei";
// import Model from "./Component/Model";
// import Interface from "./Component/Interface";
// import { Suspense, useState } from "react";
// import ScrollManager from "./Component/ScrollManager";
// import Box1a from "./Component/box1a";
import Box1Container from "./Component/Box1Container";
import Box2Container from "./Component/Box2Container";
import Box3Container from "./Component/Box3Container";
import Box4Container from "./Component/Box4Container";
import Box5Container from "./Component/Box5Container";
import Box6container from "./Component/Box6Container";
// import StarCanvas from "./Component/StarBackground";
// import Box1a from "./Component/box1a";
// i am trying to put a 3d model thats why i am doing this :
function App() {
  // const [section, setsection] = useState(0);

  // console.log();
  return (
    <>
      <div className="bg-[#000000] h-auto w-full overflow-hidden containerr">
        {/* <Box1a></Box1a> */}
        {/* <Box4Container /> */}
        <Box1Container />
        <Box2Container />
        <Box3Container />
        <Box4Container />
        <Box5Container />
        <Box6container />
      </div>
      {/* <StarCanvas /> */}
    </>
  );
}

export default App;
