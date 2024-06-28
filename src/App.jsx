import { lazy, Suspense } from "react";
import "./App.css";

// import Box1a from "./Component/box1a";
import Navbar from "./Component/Navbar";
import Box1Container from "./Component/Box1Container";
import Box2Container from "./Component/Box2Container";
import Box3Container from "./Component/Box3Container";
import Box4Container from "./Component/Box4Container";
import Box5Container from "./Component/Box5Container";
import Box6container from "./Component/Box6Container";

const Box3Lazy = lazy(() => import("./Component/Box3Container"));
const Box4Lazy = lazy(() => import("./Component/Box4Container"));
const Box5Lazy = lazy(() => import("./Component/Box5Container"));
const Box6Lazy = lazy(() => import("./Component/Box6Container"));
// import StarCanvas from "./Component/StarBackground";
// i am trying to put a 3d model thats why i am doing this :
function App() {
  return (
    <>
      <div className="bg-black h-auto w-full overflow-hidden containerr">
        <Navbar />
{/*         <Box1Container /> */}
        <Box2Container />
        <Box3Container />
        <Box4Container />
        <Box5Container />
        <Box6container />
        {/* <Suspense fallback={<div>Loading....</div>}>
          <Box3Lazy />
        </Suspense>{" "}
        <Suspense fallback={<div>Loading....</div>}>
          <Box4Lazy />
        </Suspense>{" "}
        <Suspense fallback={<div>Loading....</div>}>
          <Box5Lazy />
        </Suspense>{" "}
        <Suspense fallback={<div>Loading....</div>}>
          <Box6Lazy />
        </Suspense> */}
      </div>
    </>
  );
}

export default App;
