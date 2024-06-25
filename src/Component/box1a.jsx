import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense, useState } from "react";
const LoadingIndicator = () => {
  return <div className="bg-green-600 w-3 h-8">Loading...</div>;
};

const Box1a = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleModelLoaded = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 40 }}
        className="z-1 absolute top-[-30px] right-[30px]"
      >
        <ambientLight intensity={1} />
        <directionalLight
          position={[0.9, 0.5, -2]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={1}
          shadow-camera-near={0.1}
        />
        {/* <Suspense fallback={null}> */}
        <Model url="/scene.gltf" onLoaded={handleModelLoaded} />
        <OrbitControls enabled={false} />
        {/* </Suspense> */}
      </Canvas>
      {isLoading && <LoadingIndicator />}
    </>
  );
};

export default Box1a;

{
  /* <span className="h-[290px] absolute lg:top-[-100px] top-[-80px] lg:right-[100px] right-[100px]">
        <svg
          viewBox="10 0 200 100"
          className="h-auto flex justify-center items-center"
          xmlns="http://www.w3.org/2000/svg"
          width={290}
          height={350}
        >
          <path
            fill="#fff"
            d="M71.7,-19.3C80.2,2.7,65.4,36.2,40.9,53.3C16.4,70.4,-17.9,71.1,-40.7,54.8C-63.5,38.5,-74.9,5.2,-66.2,-17.1C-57.5,-39.4,-28.7,-50.7,1.4,-51.2C31.6,-51.7,63.3,-41.3,71.7,-19.3Z"
            transform="translate(100 100)"
          />
        </svg>
      // </span> */
}
