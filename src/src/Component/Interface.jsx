// all component interface i put the content of all component in this ;

import Box1Container from "./Box1Container";
import Box2Container from "./Box2Container";
import Box3Container from "./Box3Container";
import Box4Container from "./Box4Container";
import Box5Container from "./Box5Container";
import Box6Container from "./Box6Container";

const Section = (props) => {
  const { children } = props;
  return <section className="h-auto w-screen z-50">{children}</section>;
};

//
const Interface = () => {
  return (
    <>
      {/* <div className="z-1 flex flex-col items-center w-screen"> */}
      <Section>
        <Box1Container></Box1Container>
      </Section>
      <Section>
        <Box2Container></Box2Container>
      </Section>
      <Section>
        <Box3Container />
      </Section>
      <Section>
        <Box4Container />
      </Section>
      <Section className="z-[9999]">
        <Box5Container />
      </Section>
      <Section>
        <Box6Container />
      </Section>
    </>
  );
};

export default Interface;
