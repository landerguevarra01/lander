import { Box, Grid, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/bebas-neue";

function Portfolio() {
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
                    4
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
    </>
  );
}

export default Portfolio;
