import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import IMG1 from "../ImageAssets/IMG_2985 copy.jpg";
import "@fontsource/oswald";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/300.css";

function Me() {
  return (
    <>
      {/* <Box
        position="fixed" // Set position to fixed
        top="10px" // Adjust top position as needed
        left="10px" // Adjust left position as needed
        zIndex="999" // Set z-index to ensure it's on top of other elements
      >
        <Heading
          color="#000000"
          cursor="pointer"
          fontFamily="Oswald"
          fontWeight="500px"
        >
          LG
        </Heading>
      </Box> */}
      <Box bgColor="#ffffff" height="100vh" width="100vw">
        <Grid gridTemplateColumns="1fr 1fr">
          <Box ml="50px">
            <VStack
              height="100%"
              justifyContent="center"
              alignItems="flex-start"
              padding="56px"
            >
              <Heading
                mb="4"
                color="#c93228"
                fontFamily="Oswald"
                fontWeight="bold"
                fontSize="72px"
                letterSpacing="6px"
              >
                ABOUT.
              </Heading>
              <Text
                mb="4"
                fontFamily="Montserrat"
                fontWeight="300"
                fontSize="18px"
              >
                I'm a soon-to-be Computer Science graduate from Laguna
                University with a passion for UI/UX design and front-end
                development. I love crafting intuitive, eye-catching digital
                experiences. Beyond classes, I dive into all things tech,
                constantly learning and expanding my skills. When I'm not
                coding, I'm either leveling up my video games, binge-watching
                series, or hitting the trails on my bike.
              </Text>
              <HStack>
                <Box color="#c93228" fontWeight="bold">
                  <span>&darr; </span>
                </Box>
                <Text
                  color="#c93228"
                  fontFamily="Montserrat"
                  fontWeight="bold"
                  letterSpacing="8px"
                  fontSize="18px"
                >
                  RESUME
                </Text>
              </HStack>
            </VStack>
          </Box>
          <Box h="100vh" w="50vw">
            <VStack height="100%" justifyContent="center" alignItems="center">
              <Box
                w="50%"
                borderRadius="25px"
                overflow="hidden"
                boxShadow="14px 14px 16px rgba(0, 0, 0, 0.3)"
              >
                <Image src={IMG1} />
              </Box>
            </VStack>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Me;
