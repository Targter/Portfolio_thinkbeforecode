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
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.5}>
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
          scale={0.9}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const Box4Geometry = ({ imgUrl }) => {
  return (
    <div
      className="canvas-container"
      style={{
        width: "100px",
        height: "100px",
        marginRight: "10px",
        padding: "2px",
      }}
    >
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.1} />
          <directionalLight position={[1, 1, 1]} />
          <Ball imgUrl={imgUrl} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Box4Geometry;
