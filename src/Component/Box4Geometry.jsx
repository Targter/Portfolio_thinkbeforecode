import React, { Suspense, useEffect } from "react";
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

const Box4Geometry = ({ imgUrl }) => {
  return (
    <Suspense fallback={<span className="bg-red-600 w-3 h-8">loading...</span>}>
      <Canvas frameloop="demand" dpr={[1, 2]}>
        <Suspense fallback={<Ball imgUrl={imgUrl} />}>
          <OrbitControls enabled={false} />
          <ambientLight intensity={0.1} />
          <directionalLight position={[1, 1, 1]} />
          <Ball imgUrl={imgUrl} />
        </Suspense>
        <Preload all />
      </Canvas>
    </Suspense>
  );
};

export default Box4Geometry;
