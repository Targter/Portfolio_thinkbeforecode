import Box2Cards from "./Box2Cards.jsx";

const Box2Container = () => {
  return (
    <>
      <div className="h-auto w-full flex flex-col items-start p-2 sm:p-11 bg-black ">
        <div className="ml-11 md:ml-24 mt-3 md:mt-8 h-auto">
          <div className=" text-sm text-white md:text-lg ">INTRODUCTION</div>
          <div className="md:text-6xl text-2xl text-white md:mt-2.5 mt-1.5 md:mb-4 mb-1.5 font-semibold md:font-extrabold ">
            Overview
          </div>
          <div className="w-4/5 md:w-2/3 text-white text-left text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem deserunt amet id, velit non aperiam, ipsam maiores
            minima impedit odit est incidunt corporis ab recusandae, voluptatum
            temporibus ducimus eligendi ratione.
          </div>
          <div className="flex gap-1 md:gap-11 flex-wrap w-4/5 md:flex-row flex-col">
            <Box2Cards></Box2Cards>
            <Box2Cards></Box2Cards>
            <Box2Cards></Box2Cards>
            <Box2Cards></Box2Cards>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box2Container;
