import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";
import "@fontsource/bebas-neue";
import "@fontsource/gantari";
import "animate.css";
import { Box, Heading, VStack, useToast } from "@chakra-ui/react";

function Contact() {
  const messages = Array(8).fill("GET IN TOUCH");
  const [redirect, setRedirect] = useState(false);
  const email = "guevarralander0@gmai.com";
  const toast = useToast();

  const headingStyle = {
    transition: "transform 2s ease",
    _hover: {
      transform: "scale(0.8)",
    },
  };

  const lineStyle = {
    transition: "width 2s ease",
    width: "0%",
    _hover: {
      width: "100%",
    },
  };

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email Copied",
      description: "You will be redirected to Gmail in 3 seconds.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setRedirect(true);
  };

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        window.location.href = "https://mail.google.com/";
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [redirect]);

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
      <Box color="#dddbde" mb="100px">
        <Box
          as="a"
          onClick={handleClick}
          display="flex"
          flexDirection="column"
          alignItems="center"
          cursor="pointer"
          sx={{
            "&:hover h2": headingStyle._hover,
            "&:hover .line": lineStyle._hover,
          }}
        >
          <Heading
            as="h2"
            fontSize="220px"
            className="capitalize-every-word"
            sx={headingStyle}
          >
            Let's Talk
          </Heading>
          <Box
            className="line"
            height="2.5px"
            bgColor="#ffffff"
            mt="10px"
            sx={lineStyle}
          />
        </Box>
      </Box>
    </VStack>
  );
}

export default Contact;
