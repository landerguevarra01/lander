import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import HTMLimg from "../Assets/LanguagesIcons/htmlic.jpg"

const AnimatedBox = () => {
  const dotSize = 120; // Adjust the size of the dot here
  const boxWidth = 900; // Adjusted width of the Box
  const boxHeight = 400; // Adjusted height of the Box

  useEffect(() => {
    const keyframes = {
      "@keyframes moveX1": {
        from: { left: "0" },
        to: { left: `${boxWidth - dotSize}px` }, // Adjusted to the new width
      },
      "@keyframes moveY1": {
        from: { top: "0" },
        to: { top: `${boxHeight - dotSize}px` }, // Adjusted to the new height
      },
      "@keyframes moveX2": {
        from: { left: `${boxWidth - dotSize}px` }, // Adjusted starting position to the right side
        to: { left: "0px" }, // Back to starting position
      },
      "@keyframes moveY2": {
        from: { top: "0" }, // Adjusted starting position
        "50%": { top: `${boxHeight - dotSize}px` }, // Adjusted to the new height
        to: { top: "0" }, // Back to starting position
      },
      "@keyframes moveX3": {
        from: { left: `0px` }, // Adjusted starting position to the middle
        to: { left: `${boxWidth - dotSize}px` }, // Adjusted to the new width
      },
      "@keyframes moveY3": {
        from: { top: "0px" }, // Adjusted starting position
        "50%": { top: `${boxHeight - dotSize}px` }, // Adjusted to the new height
        to: { top: "0px" }, // Back to starting position
      },
      "@keyframes moveX4": {
        from: { left: "0px" },
        to: { left: `${boxWidth - dotSize}px` },
      },
      "@keyframes moveY4": {
        from: { top: `${boxHeight - dotSize}px` },
        to: { top: "0px" },
      },
      "@keyframes moveX5": {
        from: { left: "0px" }, // Start from the left
        to: { left: `${boxWidth - dotSize}px` }, // End at the right
      },
      "@keyframes moveY5": {
        from: { top: "0px" }, // Start from the top
        to: { top: `${boxHeight - dotSize}px` }, // End at the bottom
      },
    };

    const styleTag = document.createElement("style");
    Object.keys(keyframes).forEach((key) => {
      const rule = keyframes[key];
      const formattedKeyframes = Object.keys(rule)
        .map(
          (k) =>
            `${k} { ${Object.keys(rule[k])
              .map((prop) => `${prop}: ${rule[k][prop]};`)
              .join(" ")} }`
        )
        .join(" ");
      styleTag.innerHTML += `${key} { ${formattedKeyframes} }`;
    });
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [dotSize, boxWidth, boxHeight]);

  const dotStyle1 = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: "50%",
    // backgroundColor: "#3673cf",
    backgroundImage: `url(${HTMLimg})`,
    backgroundSize: "cover",
    boxShadow:
      "inset -5px -5px 5px rgba(0,0,0,.6), 15px 15px 2px rgba(0,0,0,.04)",
    position: "absolute",
    animation: `moveX1 3.05s linear 1.5s infinite alternate, moveY1 3.4s linear 1.5s infinite alternate`,
  };

  const dotStyle2 = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: "50%",
    backgroundColor: "#f00", // Adjust color if desired
    boxShadow:
      "inset -5px -5px 5px rgba(0,0,0,.6), 15px 15px 2px rgba(0,0,0,.04)",
    position: "absolute",
    animation: `moveX2 3.05s linear 1.5s infinite alternate, moveY2 3.4s linear 1.5s infinite alternate`,
    left: `${boxWidth - dotSize}px`, // Adjusted the left position to start from the right side
    top: "200px", // Adjust the top position if needed
  };

  const dotStyle3 = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: "50%",
    backgroundColor: "#ff0", // Adjust color if desired
    boxShadow:
      "inset -5px -5px 5px rgba(0,0,0,.6), 15px 15px 2px rgba(0,0,0,.04)",
    position: "absolute",
    animation: `moveX3 3.05s linear 1.5s infinite alternate, moveY3 3.4s linear 1.5s infinite alternate`,
    left: `${400 - dotSize}px`, // Adjusted the left position to start from the middle
    top: "100px", // Adjust the top position if needed
  };

  const dotStyle4 = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: "50%",
    backgroundColor: "#0f0", // Adjust color if desired
    boxShadow:
      "inset -5px -5px 5px rgba(0,0,0,.6), 15px 15px 2px rgba(0,0,0,.04)",
    position: "absolute",
    animation: `moveX4 3.05s linear 1.5s infinite alternate, moveY4 3.4s linear 1.5s infinite alternate`,
    top: `${boxHeight - dotSize}px`, // Adjusted the top position to start from the bottom
  };

  

  return (
    <Box
      backgroundColor="#0e0e0e"
      margin="0 auto"
      width={`${boxWidth}px`}
      height={`${boxHeight}px`}
      position="relative"
      borderRadius="5px"
      overflow="hidden"
      mt="100px"
    >
      <Box as="b" style={dotStyle1}></Box>
      <Box as="b" style={dotStyle2}></Box>
      <Box as="b" style={dotStyle3}></Box>
      <Box as="b" style={dotStyle4}></Box>
    </Box>
  );
};

export default AnimatedBox;
