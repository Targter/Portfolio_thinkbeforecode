import React, { Suspense, lazy, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";
import Ball from "./ModelBall";

import { Preload } from "@react-three/drei";
import { div } from "three/examples/jsm/nodes/Nodes.js";
// const BallLoad = lazy(() => import("./ModelBall"));
const Box4Geometry = ({ imgUrl }) => {
  // const memoizedBall = useCallback(() => <Ball imgUrl={imgUrl} />, [imgUrl]);

  const abcale = () => {
    console.log("error occured");
    return <div>Canvas is not loaded</div>;
  };
  return (
    <>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        onError={abcale}
      >
        {/* <Suspense fallback={<div>LoadingBalls......</div>}> */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} />
        {/* <Ball imgUrl={imgUrl} /> */}
        {/* <Suspense fallback={null}>{memoizedBall()}</Suspense> */}

        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={imgUrl} />
        </Suspense>
        {/* <OrbitControls enableZoom={false} enableRotate={true} /> */}
        {/* </Suspense> */}
        <Preload all />
      </Canvas>
    </>
  );
};

export default Box4Geometry;
