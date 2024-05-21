import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";
import "@fontsource/bebas-neue";
import "@fontsource/gantari";
import "animate.css";
import { Box, Heading, VStack, useToast } from "@chakra-ui/react";
import MeImg1 from "../Assets/MeImg/img7.JPG";

function Contact() {
  const messages = Array(8).fill("GET IN TOUCH");
  const [redirect, setRedirect] = useState(false);
  const email = "guevarralander0@gmail.com";
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

  const handleClick = async () => {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      // Fallback mechanism if Clipboard API is not supported
      alert(
        "Copying to clipboard is not supported in this browser. Please email me at guevarralander0@gmail.com."
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Email Copied",
        description: "You will be redirected to Gmail.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setRedirect(true);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      // Handle error, maybe show a message to the user
      alert(
        "An error occurred while copying the email to clipboard. Please try again or copy it manually."
      );
    }
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
        my={{ base: "150px", md: "100px", lg: "150px" }}
      >
        <Marquee speed={100}>
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              marginRight={{ base: "20px", lg: "50px" }}
              fontSize={{ base: "10vw", md: "6vw", lg: "8vw" }}
              fontFamily="Bebas Neue"
            >
              {message}
              <Box ml={{ base: "20px", md: "30px" }}>
                <GoDotFill fontSize={{ base: "4vw", md: "3vw", lg: "2vw" }} />
              </Box>
            </Box>
          ))}
        </Marquee>
      </Box>

      <Box
        width={{ base: "100px", md: "150px", lg: "200px" }} // Responsive sizes
        height={{ base: "100px", md: "150px", lg: "200px" }} // Responsive sizes
        borderRadius="50%"
        // backgroundColor="blue.500"
        backgroundImage={`url(${MeImg1})`}
        backgroundSize="cover"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontSize={{ base: "12px", md: "16px", lg: "20px" }} // Responsive font size
        textAlign="center"
        my={{ base: "50px", md: "20px", lg: "40px" }} // Responsive margin-top
      />

      <Box color="#dddbde" mb={{ base: "150px", lg: "100px" }}>
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
            fontSize={{ base: "14vw", md: "10vw", lg: "15vw" }}
            className="capitalize-every-word"
            sx={headingStyle}
          >
            Let's Talk
          </Heading>
          <Box
            className="line"
            height="2.5px"
            bgColor="#ffffff"
            mt={{ base: "5px", md: "10px" }}
            sx={lineStyle}
          />
        </Box>
      </Box>
    </VStack>
  );
}

export default Contact;
