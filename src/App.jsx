import "./App.css";
import StarCanvas from "./Component/StarBackground";
import Box1Container from "./Component/Box1Container";
import Box2Container from "./Component/Box2Container";
import Box3Container from "./Component/Box3Container";
import Box4container from "./Component/Box4Container";
import Box5Container from "./Component/Box5Container";
import Box6container from "./Component/Box6Container";
function App() {
  return (
    <>
      <div className="w-full h-auto bg-black">
        <Box1Container></Box1Container>

        <Box2Container></Box2Container>
        <Box3Container></Box3Container>
        <Box4container></Box4container>
        <Box5Container />
        <Box6container />
      </div>
      {/* <div className="w-full bg-red-100"></div> */}

      {/* <StarCanvas /> */}
    </>
  );
}

export default App;
