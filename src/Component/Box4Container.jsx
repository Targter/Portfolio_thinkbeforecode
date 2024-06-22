// import { techimg } from "./MotionValue";
import Box4Geometry from "./Box4Geometry";
import { techimg } from "./MotionValue";
import StarWrapper from "./StarWrapper";
const Box4container = () => {
  const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 0, 1, 2, 3];
  // const arr = [1];
  console.log(techimg);
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-11">
        {techimg.map((item) => (
          <div className="w-28 h-28 z-[9999]">
            <Box4Geometry imgUrl={item.imgurl} key={item.name} />
          </div>
        ))}
      </div>
    </>
  );
};

// export default Box4container;
export default StarWrapper(Box4container, "Dballs");
