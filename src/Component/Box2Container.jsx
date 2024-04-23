import Box2Cards from "./Box2Cards.jsx";

const Box2Container = () => {
  return (
    <>
      <div className="box2container">
        <div className="box2itemcontainer">
          <div className="Introduction">INTRODUCTION</div>
          <div className="overview">Overview</div>
          <div className="aboutmyself">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem deserunt amet id, velit non aperiam, ipsam maiores
            minima impedit odit est incidunt corporis ab recusandae, voluptatum
            temporibus ducimus eligendi ratione.
          </div>
          <div className="box2cardcontainerbox">
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
