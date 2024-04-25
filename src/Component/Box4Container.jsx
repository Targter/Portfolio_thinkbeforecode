// import { techimg } from "./MotionValue";
import Box4Geometry from "./Box4Geometry";
import { techimg } from "./MotionValue";
const Box4container = () => {
  const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 0, 1, 2, 3];
  // const arr = [1];
  console.log(techimg);
  return (
    <>
      <div className="h-auto w-full bg-black flex justify-center relative pt-24 p-2 sm:pl-11">
        <div className="w-4/5 h-auto flex md:ml-28 md:mt-24 mt-14 justify-center flex-wrap gap-4">
          {techimg.map((item) => (
            <Box4Geometry imgUrl={item.imgurl} key={item.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Box4container;
