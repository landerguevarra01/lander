import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import img1 from "../Assets/triplec.png";
import img2 from "../Assets/esignage.jpeg";
import img3 from "../Assets/giyop.png";

function Project() {
  // Array of images
  const images = [img1, img2, img3];
  
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
      <Grid
        gridTemplateColumns="repeat(2, 1fr)" // Two columns
        justifyItems="center"
        gap={5}
      >
        {boxes}
      </Grid>
    </>
  );
}

export default Project;
