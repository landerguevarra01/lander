import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import "@fontsource/oswald/400.css";
import "@fontsource/montserrat/300.css";

function Hero({ setCurrentPage }) {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        p="10px"
        bgColor="#000000"
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <VStack>
          <Box ml="-500px">
            <Box
              mt="55px"
              ml="75px"
              fontFamily="Montserrat"
              color="#ffffff"
              letterSpacing="2px"
            >
              <Text fontSize="28px">Hey, I'm</Text>
            </Box>
            <Box ml="70px" mt="-25px" color="#c93228">
              <Heading fontSize="170px" fontFamily="Oswald" letterSpacing="5px">
                LANDER
              </Heading>
            </Box>
            <Box ml="132px" mt="-30px" color="#c93228">
              <Heading fontSize="170px" fontFamily="Oswald">
                GUEVARRA.
              </Heading>
            </Box>
            <Box
              ml="142px"
              fontFamily="Montserrat"
              color="#ffffff"
              letterSpacing="2px"
            >
              <Text fontSize="28px">
                A UI/UX designer & front-end web developer
              </Text>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="20px" mr="-400px">
              <VStack gap="-35px">
                <Link
                  onClick={() => setCurrentPage("projects")}
                  _hover={{ textDecoration: "none" }}
                  position="relative"
                  onMouseEnter={(e) => {
                    e.target.firstChild.style.visibility = "visible";
                    e.target.style.color = "#c93228"; // Change text color on hover
                    e.target.firstChild.style.fontWeight = "bold"; // Apply font weight on hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.firstChild.style.visibility = "hidden";
                    e.target.style.color = "#ffffff"; // Revert text color when not hovered
                    e.target.firstChild.style.fontWeight = "normal"; // Revert font weight when not hovered
                  }}
                >
                  <Text
                    fontSize="16px"
                    color="#ffffff"
                    letterSpacing="8px"
                    fontFamily="Montserrat"
                    transition="color 0.3s ease" // Smooth transition effect for color change
                  >
                    <span style={{ visibility: "hidden", fontSize: "22px" }}>
                      &rarr;{" "}
                    </span>
                    SEE PROJECTS
                  </Text>
                </Link>

                <Link
                  onClick={() => setCurrentPage("about")}
                  _hover={{ textDecoration: "none" }}
                  position="relative"
                  onMouseEnter={(e) => {
                    e.target.firstChild.style.visibility = "visible";
                    e.target.style.color = "#c93228"; // Change text color on hover
                    e.target.firstChild.style.fontWeight = "bold"; // Apply font weight on hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.firstChild.style.visibility = "hidden";
                    e.target.style.color = "#ffffff"; // Revert text color when not hovered
                    e.target.firstChild.style.fontWeight = "normal"; // Revert font weight when not hovered
                  }}
                >
                  <Text
                    fontSize="16px"
                    color="#ffffff"
                    letterSpacing="8px"
                    fontFamily="Montserrat"
                    transition="color 0.3s ease" // Smooth transition effect for color change
                    mr="25px"
                  >
                    <span style={{ visibility: "hidden", fontSize: "22px" }}>
                      &rarr;{" "}
                    </span>
                    LEARN MORE
                  </Text>
                </Link>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default Hero;
