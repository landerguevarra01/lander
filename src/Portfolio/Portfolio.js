import { Box, Grid, HStack, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import "@fontsource/bebas-neue";
import img1 from "../Assets/triplec.png";
import img2 from "../Assets/esignage.jpeg";
import img3 from "../Assets/giyop.png";

function Portfolio() {
  // Array of images
  const images = [img1, img2, img3];
  const numProjects = images.length; // Get the number of projects

  // Map through the images array to create boxes
  const boxes = images.map((image, index) => (
    <Box key={index} w="90%" bgColor="red" h="50vh" position="relative" p="5px">
      {/* Each Box */}
      <Image
        src={image}
        alt={`Project ${index + 1}`} // Provide a meaningful alt text
        w="100%"
        h="100%"
        objectFit="cover" // Make sure the image covers the entire box
        top="0"
        left="0"
      />
    </Box>
  ));
  return (
    <>
      <Box bgColor="#0e0e0e" w="98.8vw" pl="80px" pr="80px">
        <Grid gridTemplateColumns="1fr 1fr" justifyContent="start">
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
                    1
                  </Heading>
                  <Text fontSize="28px">Recognition</Text>
                </HStack>
              </Grid>
            </Grid>
          </Box>
          <Box fontFamily="Bebas Neue" color="#ffffff" mt="50px">
            <Grid gridTemplateRows="1fr 1fr">
              <Box />
              <Text mt="40px" fontSize="32px" fontWeight="bold">
                Transforming visions into tangible success, my designs blend
                form and function seamlessly, ensuring your projects achieve
                their intended impact.
              </Text>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <Grid
        gridTemplateColumns="repeat(2, 1fr)" // Two columns
        justifyItems="center"
        gap={5}
        mt="100px"
      >
        {boxes}
      </Grid>
    </>
  );
}

export default Portfolio;
