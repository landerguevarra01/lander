import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";
import "@fontsource/bebas-neue";
import "@fontsource/gantari";

function Contact() {
  const messages = Array(8).fill("GET IN TOUCH");

  return (
    <VStack>
      <Box
        bgColor="#ffffff"
        color="#000000"
        overflow="hidden"
        w="98.7vw"
        my="150px"
      >
        <Marquee speed={100}>
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              marginRight="50px"
              fontSize="14vh"
              fontFamily="Bebas Neue"
            >
              {message}
              <Box ml="50px">
                <GoDotFill fontSize="7vh" />
              </Box>
            </Box>
          ))}
        </Marquee>
      </Box>
      <Box>

      </Box>
    </VStack>
  );
}

export default Contact;
