import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import classnames from "classnames";
import { useState, useEffect } from "react";
import "animate.css";
import "@fontsource/bebas-neue";

function HeroComponent() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Set initial animation state to true when component mounts
    setIsAnimated(true);
    // Set a timeout to show the text after 2 seconds
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 0);
    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const handleClick = () => {
    // Toggle animation state
    setIsAnimated(!isAnimated);
  };

  return (
    <>
      <VStack>
        <Box
          color="#ffffff"
          mt="13vh"
          className={classnames("animate__animated", {
            animate__lightSpeedInRight: isAnimated,
          })}
        >
          <Heading fontFamily="Bebas Neue" fontSize="36vh" >LANDER</Heading>
        </Box>
        <Box
          color="#ffffff"
          mt="-10vh"
          className={classnames("animate__animated", {
            animate__lightSpeedInLeft: isAnimated,
          })}
        >
          <Heading fontFamily="Bebas Neue" fontSize="30vh">GUEVARRA</Heading>
        </Box>
        <Box bgColor="#9b0000" w="110vh" h="1.5vh" mt="-1vh" />
        {showText && (
          <Box
            className={classnames("animate__animated", {
              animate__slideInUp: isAnimated,
            })}
          >
            <Text
              color="#ffffff" // Set color to white during animation
              fontSize="18px"
              fontFamily="Bebas Neue"
            >
              Building pixel-perfect web solutions prioritizing user experience,
              ensuring smooth navigation and effortless interaction.
            </Text>
          </Box>
        )}
      </VStack>
    </>
  );
}

export default HeroComponent;
