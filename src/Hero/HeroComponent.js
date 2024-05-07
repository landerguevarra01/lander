import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import classnames from "classnames";
import { useState, useEffect } from "react";
import "animate.css";

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
          <Heading fontSize="32vh">LANDER</Heading>
        </Box>
        <Box
          color="#ffffff"
          mt="-10vh"
          className={classnames("animate__animated", {
            animate__lightSpeedInLeft: isAnimated,
          })}
        >
          <Heading fontSize="26.2vh">GUEVARRA</Heading>
        </Box>
        <Box bgColor="#9b0000" w="140vh" h="2vh" mt="5vh" />
        {showText && (
          <Box
            className={classnames("animate__animated", {
              animate__slideInUp: isAnimated,
            })}
          >
            <Text
              color="#ffffff" // Set color to white during animation
              fontSize="18px"
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
