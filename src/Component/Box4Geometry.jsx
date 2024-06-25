import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const Ball = (prop) => {
  const [decal] = useTexture([prop.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          // color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0.1, 0.1, 1]}
          rotation={[2 * Math.PI, 0, 0.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const LoadingIndicator = () => {
  return <div className="bg-green-600 w-3 h-8">Loading...</div>;
};

const Box4Geometry = ({ imgUrl }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleModelLoaded = () => {
    setIsLoading(!isLoading);
  };
  return (
    <>
      <Canvas dpr={[1, 2]}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} />

        <Ball imgUrl={imgUrl} onLoaded={handleModelLoaded} />
        <OrbitControls enabled={false} />
      </Canvas>
      {isLoading && <LoadingIndicator />}
    </>
  );
};

export default Box4Geometry;
