import React, { Suspense, lazy, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import Ball from "./ModelBall";
const BallLoad = lazy(() => import("./ModelBall"));
const Box4Geometry = ({ imgUrl }) => {
  // const memoizedBall = useCallback(() => <Ball imgUrl={imgUrl} />, [imgUrl]);
  return (
    <>
      <Canvas dpr={[1, 2]}>
        {/* <Suspense fallback={<div>LoadingBalls......</div>}> */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} />
        {/* <Ball imgUrl={imgUrl} /> */}
        {/* <Suspense fallback={null}>{memoizedBall()}</Suspense> */}
        <BallLoad imgUrl={imgUrl} />
        <OrbitControls enableZoom={false} enableRotate={true} />
        {/* </Suspense> */}
      </Canvas>
    </>
  );
};

export default Box4Geometry;
