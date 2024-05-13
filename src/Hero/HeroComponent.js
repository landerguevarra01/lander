import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import classnames from "classnames";
import { useState, useEffect } from "react";
import "animate.css";
import "@fontsource/bebas-neue";

function HeroComponent() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      // Determine if the user has scrolled down enough to trigger the effect
      const scrolled = window.scrollY > 200; // Adjust the value as needed
      setIsHovered(scrolled);
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <VStack>
        <Box
          color="#ffffff"
          mt="13vh" 
          className={classnames("animate__animated", {
            animate__lightSpeedInRight: isAnimated,
          })}
          style={{
            animationDuration: isAnimated ? "1.2s" : "0s", // Change the duration based on isAnimated state
          }}
        >
          <Heading 
            fontFamily="Bebas Neue" 
            fontSize="36vh"
            style={{
              transformOrigin: "left top",
              transform: isHovered
                ? "perspective(2000px) rotateX(10deg) rotateY(10deg) rotateZ(-1deg)"
                : "none",
              transition: "transform 2s ease-out, box-shadow 2s ease-out",
            }}
          >
            LANDER
          </Heading>
        </Box>
        <Box
          color="#ffffff"
          mt="-10vh"
          className={classnames("animate__animated", {
            animate__lightSpeedInLeft: isAnimated,
          })}
          style={{
            animationDuration: isAnimated ? "1.2s" : "0s", // Change the duration based on isAnimated state
          }}
        >
          <Heading 
            fontFamily="Bebas Neue" 
            fontSize="30vh"
            style={{
              transformOrigin: "left top",
              transform: isHovered
                ? "perspective(1000px) rotateX(10deg) rotateY(10deg) rotateZ(-2deg)"
                : "none",
              transition: "transform 2s ease-out, box-shadow 2s ease-out",
            }}
          >
            GUEVARRA
          </Heading>
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
              fontSize="20px"
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
