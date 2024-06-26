import { Decal, Float, useTexture } from "@react-three/drei";

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

export default Ball;
