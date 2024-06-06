import { Box, Grid, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "@fontsource/oswald/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/300.css";

function Contact() {
  return (
    <>
      <Box
        p="10px"
        bgColor="#ffffff"
        height="100vh"
        width="100vw"
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        fontFamily="Montserrat"
      >
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
        <Grid gridTemplateColumns="1fr 1fr" gap="50px">
          <VStack alignItems="center" mb="150px">
            <Box color="#c93228" ml="-520px">
              <Heading fontFamily="Oswald" fontSize="72px">
                LET'S GO?
              </Heading>
            </Box>
            <HStack>
              <Box color="#c93228" ml="-360px">
                <HStack>
                  <Box fontSize="18px">
                    <span>↗</span>
                  </Box>
                  <Text fontWeight="bold" fontSize="18px">
                    MAIL
                  </Text>
                </HStack>
              </Box>
              <Box fontFamily="Montserrat" fontWeight="300" fontSize="18px">
                <Text>guevarralander0@gmail.com</Text>
              </Box>
            </HStack>
          </VStack>
          <VStack alignItems="center">
            <Box>
              <HStack gap="80px">
                <Box mt="50px" color="#c93228">
                  <Text
                    fontFamily="Montserrat"
                    fontWeight="bold"
                    letterSpacing="7px"
                    fontSize="18px"
                  >
                    CONNECT
                  </Text>
                </Box>
                <VStack alignItems="flex-start">
                  <Box
                    mt="95px"
                    fontFamily="Montserrat"
                    fontWeight="300"
                    fontSize="18px"
                  >
                    <Text>facebook</Text>
                    <Text>github</Text>
                    <Text>linkedin</Text>
                  </Box>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </>
  );
}

export default Contact;
