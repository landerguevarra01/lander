import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const AnimatedBox = () => {
  const dotSize = 70; // Adjust the size of the dot here

  useEffect(() => {
    const boxWidth = 900; // Adjusted width of the Box
    const boxHeight = 400; // Adjusted height of the Box

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
        from: { left: `0px` }, // Adjusted starting position to the middle
        to: { left: `${boxWidth - dotSize}px` }, // Adjusted to the new width
      },
      "@keyframes moveY4": {
        from: { top: "0px" }, // Adjusted starting position
        "50%": { top: `${boxHeight - dotSize}px` }, // Adjusted to the new height
        to: { top: "0px" }, // Back to starting position
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
  }, [dotSize]);

  const dotStyle1 = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: "50%",
    backgroundColor: "#3673cf",
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
    left: `${900 - dotSize}px`, // Adjusted the left position to start from the right side
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
    backgroundColor: "black", // Adjust color if desired
    boxShadow:
      "inset -5px -5px 5px rgba(0,0,0,.6), 15px 15px 2px rgba(0,0,0,.04)",
    position: "absolute",
    animation: `moveX4 3.05s linear 1.5s infinite alternate, moveY4 3.4s linear 1.5s infinite alternate`,
    right: `${700 - dotSize}px`, // Adjusted the left position to start from the middle
    top: "300px", // Adjust the top position if needed
  };

  const boxWidth = 900; // Adjusted width of the Box
  const boxHeight = 400; // Adjusted height of the Box

  return (
    <Box
      backgroundColor="#0e0e0e"
      margin="0 auto"
      width={`${boxWidth}px`}
      height={`${boxHeight}px`}
      position="relative"
    //   boxShadow="inset 0 0 3px #000"
      borderRadius="5px"
    //   border="1px solid #111"
      overflow="hidden"
      mt="100px"
    >
      <Box as="b" style={dotStyle1}></Box>
      <Box as="b" style={dotStyle2}></Box>
      <Box as="b" style={dotStyle3}></Box>
      {/* <Box as="b" style={dotStyle4}></Box> */}
    </Box>
  );
};

export default AnimatedBox;
