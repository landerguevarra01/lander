import React, { useState } from "react";
import { Box, Grid, Heading, Text, Link } from "@chakra-ui/react";
import "@fontsource/oswald";
import "@fontsource/montserrat";
import Content1 from "../Content/Content1";

function Projects() {
  const [selectedPortfolioIndex, setSelectedPortfolioIndex] = useState(0); // Initial selected portfolio index

  // Define an array of project links
  const projectLinks = [
    { title: "GIYO ALVAREZ", index: 0 },
    { title: "E-SIGNAGE", index: 1 },
    { title: "TRIPLE C", index: 2 },
    { title: "ROBOTICS COMPETITION", index: 3 },
    { title: "RCTF", index: 4 },
    // Add more projects as needed
  ];

  // Function to handle link click and change selected portfolio index
  const handleLinkClick = (index) => {
    setSelectedPortfolioIndex(index);
  };

  return (
    <>
      <Box
        bgColor="#000000"
        height="100vh"
        width="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid gridTemplateColumns="1fr 1fr">
          <Box
            color="#ffffff"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            p="50px"
          >
            <Grid gridTemplateRows="1fr 1fr">
              <Box pt="30px">
                <Heading
                  fontFamily="Oswald"
                  fontWeight="bold"
                  color="#c93228"
                  fontSize="72px"
                >
                  PROJECTS
                </Heading>
                <Text
                  fontFamily="Montserrat"
                  fontWeight="thin"
                  fontSize="18px"
                  mt="20px"
                >
                  Turning visions into reality, my designs flawlessly merge form
                  and function, guaranteeing your projects make a powerful
                  impact.
                </Text>
              </Box>
              {/* Render project links using .map */}
              <Box
                color="#ffffff"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                {projectLinks.map((project, index) => (
                  <Link
                    key={index}
                    color="#ffffff"
                    fontFamily="Montserrat"
                    fontWeight="thin"
                    letterSpacing="8px"
                    fontSize="18px"
                    mb="10px" // Add margin bottom
                    mt="10px" // Add margin top
                    onClick={() => handleLinkClick(project.index)}
                    _hover={{
                      textDecoration: "none",
                      color: "#c93228",
                      fontWeight: "bold", // Set font weight to bold on hover
                    }}
                  >
                    {project.title}
                  </Link>
                ))}
              </Box>
            </Grid>
          </Box>

          {/* Render Content1 and pass selected portfolio index */}
          <Content1 selectedPortfolioIndex={selectedPortfolioIndex} />
        </Grid>
      </Box>
    </>
  );
}

export default Projects;
