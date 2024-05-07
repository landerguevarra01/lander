import { Heading, VStack, Box } from "@chakra-ui/react";
import HeroComponent from "./Hero/HeroComponent.js";
import Me from "./About/Me.js";
import Portfolio from "./Portfolio/Portfolio.js";
function App() {
  return (
    <>
      <VStack bgColor="#0e0e0e">
        <Box position="sticky" top="0" zIndex="1">
          <HeroComponent />
        </Box>
        <Box mt="100px" zIndex="2">
          <Me />
        </Box>
        <Box mt="-10px" zIndex="2" >
          <Portfolio />
        </Box>
      </VStack>
    </>
  );
}

export default App;
