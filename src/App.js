import { Heading, VStack, Box } from "@chakra-ui/react";
import HeroComponent from "./Hero/HeroComponent.js";
import Me from "./About/Me.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Project from "./Portfolio/Project.js";
import Contact from "./Contact/Contact.js";
function App() {
  return (
    <>
      <VStack bgColor="#0d0d0d">
        <Box position="sticky" top="0" zIndex="1">
          <HeroComponent />
        </Box>
        <Box mt="100px" zIndex="2" bgColor="#0e0e0e">
          <Me />
          <Portfolio />
          {/* <Contact/> */}
        </Box>
      </VStack>
    </>
  );
}

export default App;
