// import { techimg } from "./MotionValue";
import { lazy } from "react";
// import Box4Geometry from "./Box4Geometry";
import { techimg } from "./MotionValue";
import StarWrapper from "./StarWrapper";
import { useMemo } from "react";

const BallModel = lazy(() => import("./Box4Geometry"));
const Box4container = () => {
  const memoizedTechimg = useMemo(() => techimg, []);
  console.log("container 4");

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center lg:gap-10  gap-4 mt-11">
        {memoizedTechimg.map((item, index) => (
          <div className="lg:w-28 w-16 lg:h-28 h-16 " key={index}>
            <BallModel imgUrl={item.imgurl} key={item.name} />
          </div>
        ))}
      </div>
    </>
  );
};

// export default Box4container;
export default StarWrapper(Box4container, "Dballs");
