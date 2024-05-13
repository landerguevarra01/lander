import { Box, Grid, Heading, Image, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "@fontsource/bebas-neue";
import "@fontsource/gantari";
import img1 from "../Assets/triplec.png";
import img2 from "../Assets/esignage.jpeg";
import img3 from "../Assets/giyop.png";
import img4 from "../Assets/robotics.jpg";
import img5 from "../Assets/microbio.jpg";
import { IoEyeSharp } from "react-icons/io5";
import { PiEye, PiEyeClosed } from "react-icons/pi";

function Portfolio() {
  const [projectHoverIndex, setProjectHoverIndex] = useState(null);
  const [recognitionHoverIndex, setRecognitionHoverIndex] = useState(null);

  const handleProjectMouseEnter = (index) => {
    setProjectHoverIndex(index);
  };

  const handleProjectMouseLeave = () => {
    setProjectHoverIndex(null);
  };

  const handleRecognitionMouseEnter = (index) => {
    setRecognitionHoverIndex(index);
  };

  const handleRecognitionMouseLeave = () => {
    setRecognitionHoverIndex(null);
  };

  // Array of images
  const images = [img3, img2, img1];
  const numProjects = images.length; // Get the number of projects

  const projectLinks = [
    "https://giyoalvarez.vercel.app/",
    "https://play.google.com/store/apps/details?id=com.esignage.myapplication&pcampaignid=web_share",
    "http://triplec-parking.000webhostapp.com/?fbclid=IwZXh0bgNhZW0CMTAAAR3wF5Y0qUaljJAu1QDp_gFX0O_MsrlEGTcP4XhJOm0GaFe11gF2kqKWvSU_aem_AQmS6Wch6dRDTeyMcrWdicP-YnA7pgMCcOQHgKae3ivB8jLRj2Pan4PWnLAA52RV9oL7Iq6wCQfPl9mABXvbsgma",
    // Add more links as needed
  ];

  // Map through the images array to create boxes for projects
  const projectBoxes = images.map((image, index) => (
    <Box
      key={index}
      w="100%"
      h="50vh"
      position="relative"
      p="5px"
      borderRadius="25px"
      textAlign="center"
      overflow="hidden"
      onMouseEnter={() => handleProjectMouseEnter(index)}
      onMouseLeave={handleProjectMouseLeave}
    >
      {/* Image */}
      <Image
        src={image}
        alt={`Project ${index + 1}`}
        w="100%"
        h="100%"
        objectFit="cover"
        top="0"
        left="0"
        borderRadius="15px"
        transition="transform 0.6s ease-in-out" // Adjust transition duration if needed
        transform={projectHoverIndex === index ? "scale(1.1)" : "scale(1)"}
        style={{
          filter: projectHoverIndex !== index ? "blur(4px)" : "none", // Apply blur filter conditionally
          zIndex: 1, // Set z-index of the image
        }}
      />
      {/* Closed Eye Icon */}
      {projectHoverIndex !== index && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={2} // Set z-index of the icon
        >
          <PiEyeClosed fontSize="50px" />
        </Box>
      )}
      {/* Open Eye Icon */}
      <a
        href={projectLinks[index]} // Dynamic link based on index
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          position="absolute"
          bottom="5px"
          right="5px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor="#4B5059"
          color="white"
          fontSize="24px"
          h="70px"
          w="70px"
          borderRadius="full"
          zIndex={2} // Set z-index of the icon
          opacity={projectHoverIndex === index ? 1 : 0} // Show the icon only when hovered
          transition="opacity 0.2s ease-in-out" // Add transition for icon opacity
        >
          <PiEye fontSize="50px" />
        </Box>
      </a>
    </Box>
  ));
  
  // Array of recognition images
  const recognitionImages = [img4, img5];
  const numRecognitions = recognitionImages.length; // Get the number of projects

  // Map through the recognition images array to create boxes for recognition
  const recognitionBoxes = recognitionImages.map((image, index) => (
    <Box
      key={index}
      w="100%"
      h="50vh"
      position="relative"
      p="5px"
      borderRadius="25px"
      textAlign="center"
      overflow="hidden"
      onMouseEnter={() => handleRecognitionMouseEnter(index)}
      onMouseLeave={handleRecognitionMouseLeave}
    >
      {/* Image */}
      <Image
        src={image}
        alt={`Recognition ${index + 1}`}
        w="100%"
        h="100%"
        objectFit="cover"
        top="0"
        left="0"
        borderRadius="15px"
        transition="transform 0.6s ease-in-out" // Remove filter transition
        transform={recognitionHoverIndex === index ? "scale(1.1)" : "scale(1)"}
        style={{
          filter: recognitionHoverIndex !== index ? "blur(4px)" : "none", // Apply blur filter conditionally
          zIndex: 1, // Set z-index of the image
        }}
      />
      {/* Icon */}
      {recognitionHoverIndex !== index && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={2} // Set z-index of the icon
        >
          <PiEyeClosed fontSize="50px" />
        </Box>
      )}
      {/* Open Eye Icon */}
      <Box
        position="absolute"
        bottom="5px"
        right="5px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="#4B5059"
        color="white"
        fontSize="24px"
        h="70px"
        w="70px"
        borderRadius="full"
        zIndex={2} // Set z-index of the icon
        opacity={recognitionHoverIndex === index ? 1 : 0} // Show the icon only when hovered
        transition="opacity 0.2s ease-in-out" // Add transition for icon opacity
      >
        <PiEye fontSize="50px" />
      </Box>
    </Box>
  ));
  

  // Create an array of headings for projects
  const projectHeadings = [
    "PERSONAL PORTFOLIO",
    "AUTOMATIC VOICE NOTIFICATION ELECTRONIC SIGNAGE",
    "TRIPLE C ARDUINO PARKING MANAGEMENT SYSTEM",
  ];

  // Create an array of headings for recognition
  const recognitionHeadings = [
    "DIVISION LEVEL ROBOTICS COMPETITION",
    "REGIONAL SCIENCE AND TECHNOLOGY FAIR",
  ];

  // Map through the headings array to create headings for projects
  const projectHeadingElements = projectHeadings.map((heading, index) => (
    <Heading
      key={index}
      as="h3"
      fontSize="24px"
      color="white"
      mt="10px"
      fontFamily="gantari"
    >
      {heading}
    </Heading>
  ));

  // Map through the headings array to create headings for recognition
  const recognitionHeadingElements = recognitionHeadings.map(
    (heading, index) => (
      <Heading
        key={index}
        as="h3"
        fontSize="24px"
        color="white"
        mt="10px"
        fontFamily="gantari"
      >
        {heading}
      </Heading>
    )
  );

  // Combine boxes and headings in a grid for projects
  const projectGridItems = projectBoxes.map((box, index) => (
    <Box key={index}>
      {box}
      {projectHeadingElements[index]} {/* Access the corresponding heading */}
    </Box>
  ));

  // Combine boxes and headings in a grid for recognition
  const recognitionGridItems = recognitionBoxes.map((box, index) => (
    <Box key={index}>
      {box}
      {recognitionHeadingElements[index]}{" "}
      {/* Access the corresponding heading */}
    </Box>
  ));

  return (
    <>
      {/* Portfolio section */}
      <Box bgColor="#0e0e0e" w="98.8vw" pl="80px" pr="80px">
        <Grid gridTemplateColumns="1fr 1fr" justifyContent="start">
          {/* Portfolio heading and statistics */}
          <Box fontFamily="Bebas Neue" color="#ffffff" mt="150px">
            <Grid gridTemplateRows="1fr 1fr">
              <Heading fontFamily="Bebas Neue" color="#ffffff" fontSize="72px">
                PORTFOLIO
              </Heading>
              <Grid gridTemplateColumns="1fr 1fr" gap="-20px">
                <HStack align="baseline">
                  <Heading fontFamily="Bebas Neue" fontSize="72px">
                    {numProjects}
                  </Heading>
                  <Text fontSize="28px">Undertakings</Text>
                </HStack>
                <HStack align="baseline">
                  <Heading fontFamily="Bebas Neue" fontSize="72px">
                    {numRecognitions}
                  </Heading>
                  <Text fontSize="28px">Recognition</Text>
                </HStack>
              </Grid>
            </Grid>
          </Box>
          {/* Portfolio description */}
          <Box fontFamily="Bebas Neue" color="#ffffff" mt="50px">
            <Grid gridTemplateRows="1fr 1fr">
              <Box />
              <Text mt="40px" fontSize="32px" fontWeight="bold" align="baseline">
                Transforming visions into tangible success, my designs blend
                form and function seamlessly, ensuring your projects achieve
                their intended impact.
              </Text>
            </Grid>
          </Box>
        </Grid>
      </Box>
      {/* Grid for projects and recognition */}
      <Grid
        gridTemplateColumns="repeat(2, 1fr)" // Two columns
        justifyItems="center"
        gap={5}
        rowGap={10}
        mt="100px"
        pl="100px"
        pr="100px"
      >
        {/* Projects */}
        {projectGridItems}

        {/* Recognition */}
        {recognitionGridItems}
      </Grid>
    </>
  );
}

export default Portfolio;
