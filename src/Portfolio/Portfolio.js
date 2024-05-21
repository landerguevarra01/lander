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
          bottom="25px"
          right="25px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor="#4B5059"
          color="white"
          fontSize="24px"
          h="60px"
          w="60px"
          borderRadius="full"
          // transform="translate(-50%, -50%)"
          transition="opacity 0.4s ease-in-out" // Add transition for icon opacity
          zIndex={2} // Set z-index of the icon
        >
          <PiEyeClosed fontSize="40px" />
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
          bottom="25px"
          right="25px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor="#4B5059"
          color="white"
          fontSize="24px"
          h="60px"
          w="60px"
          borderRadius="full"
          zIndex={2} // Set z-index of the icon
          opacity={projectHoverIndex === index ? 1 : 0} // Show the icon only when hovered
          // transition="opacity 0.2s ease-in-out" // Add transition for icon opacity
        >
          <PiEye fontSize="40px" />
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
          bottom="25px"
          right="25px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor="#4B5059"
          color="white"
          fontSize="24px"
          h="60px"
          w="60px"
          borderRadius="full"
          // transform="translate(-50%, -50%)"
          transition="opacity 0.9s ease-in-out" // Add transition for icon opacity
          zIndex={2} // Set z-index of the icon
        >
          <PiEyeClosed fontSize="40px" />
        </Box>
      )}
      {/* Open Eye Icon */}
      <Box
        position="absolute"
        bottom="25px"
        right="25px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="#4B5059"
        color="white"
        fontSize="24px"
        h="60px"
        w="60px"
        borderRadius="full"
        zIndex={2} // Set z-index of the icon
        opacity={recognitionHoverIndex === index ? 1 : 0} // Show the icon only when hovered
        // transition="opacity 0.2s ease-in-out" // Add transition for icon opacity
      >
        <PiEye fontSize="40px" />
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
      <Box
        bgColor="#0e0e0e"
        w="100%"
        px={{ base: "20px", md: "80px" }}
        py="80px"
      >
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          justifyContent="start"
          alignItems="center"
          textAlign={{ base: "center", md: "initial" }}
          gap={{ base: "40px", md: "initial" }}
        >
          {/* Portfolio heading and statistics */}
          <Box color="#ffffff">
            <Heading
              as="h2"
              fontFamily="Bebas Neue"
              fontSize={{ base: "48px", md: "72px" }}
              mb="20px"
            >
              PORTFOLIO
            </Heading>
            <Grid
              gridTemplateColumns="1fr 1fr"
              gap={{ base: "20px", md: "initial" }}
            >
              <HStack
                align="baseline"
                fontFamily="Bebas Neue"
                pl={{ base: "20px", md: "initial" }}
              >
                <Heading
                  as="h3"
                  fontFamily="Bebas Neue"
                  fontSize={{ base: "48px", md: "72px" }}
                >
                  {numProjects}
                </Heading>
                <Text fontSize={{ base: "24px", md: "28px" }}>
                  Undertakings
                </Text>
              </HStack>
              <HStack
                align="baseline"
                mt={{ base: "0px", md: "initial" }}
                pl={{ base: "0px", md: "initial" }}
                fontFamily="Bebas Neue"
              >
                <Heading
                  as="h3"
                  fontFamily="Bebas Neue"
                  fontSize={{ base: "48px", md: "72px" }}
                >
                  {numRecognitions}
                </Heading>
                <Text fontSize={{ base: "24px", md: "28px" }}>Recognition</Text>
              </HStack>
            </Grid>
          </Box>
          {/* Portfolio description */}
          <Box
            color="#ffffff"
            mt={{ base: "50px", md: 0 }}
            textAlign={{ base: "center", md: "initial" }}
            pl={{ base: "10px", md: "initial" }}
            pr={{ base: "10px", md: "initial" }}
          >
            <Text
              fontSize={{ base: "22px", md: "32px" }}
              fontWeight="bold"
              align="baseline"
              fontFamily="Bebas Neue"
            >
              Transforming visions into tangible success, my designs blend form
              and function seamlessly, ensuring your projects achieve their
              intended impact.
            </Text>
          </Box>
        </Grid>
      </Box>
      {/* Grid for projects and recognition */}
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // One column on small screens, two columns on larger screens
        justifyItems="center"
        gap={5}
        rowGap={10}
        mt="100px"
        px={{ base: "20px", md: "100px" }}
        pl={{ base: "20px", md: "100px" }}
        pr={{ base: "20px", md: "100px" }}
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
