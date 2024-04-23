// import { techimg } from "./MotionValue";
import Box4Geometry from "./Box4Geometry";
import { techimg } from "./MotionValue";
const Box4container = () => {
  const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 0, 1, 2, 3];
  // const arr = [1];
  console.log(techimg);
  return (
    <>
      <div className="box4container">
        <div className="ballscontainer">
          {techimg.map((item) => (
            <Box4Geometry imgUrl={item.imgurl} key={item.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Box4container;