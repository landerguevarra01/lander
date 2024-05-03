import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import "./glitch.css";

function HeroComponent() {
  return (
    <>
      <VStack>
        <Box color="#ffffff" mt="13vh">
          <Heading fontSize="35vh">LANDER</Heading>
          <Heading fontSize="26.2vh" mt="-10vh">
            GUEVARRA
          </Heading>
          <Box bgColor="#9b0000" w="140vh" h="2vh" mt="5vh" />
        </Box>
        <Text color="#ffffff" fontSize="16px">
          Building pixel-perfect web solutions prioritizing user experience,
          ensuring smooth navigation and effortless interaction.
        </Text>
      </VStack>
    </>
  );
}

export default HeroComponent;
