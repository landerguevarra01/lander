import { Box, Grid, Text, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import MeImg from "../Assets/img7.JPG";
import { GoCodeReview } from "react-icons/go";

function Me() {
  return (
    <>
      <Box
        bgColor="#e4e1db"
        borderRadius="60px 60px 0px 0px"
        pl="80px"
        pr="80px"
        pb="50px"
        boxShadow="0px -94px 25px rgba(14, 14, 14, 0.4)"
      >
        <Grid gridTemplateColumns="1fr 1fr" gap="40px" display="flex">
          <VStack display="flex-start" mt="50px">
            <Box
              pr="40px"
              pb="50px"
              overflowY="auto"
              maxHeight="600px"
              sx={{
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  bg: "gray.400",
                  borderRadius: "8px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  bg: "gray.500",
                },
                "&::-webkit-scrollbar-track": {
                  bg: "gray.100",
                  borderRadius: "8px",
                },
              }}
            >
              <Heading fontSize="72px">about me...</Heading>
              <Text fontSize="20px" fontWeight="bold">
                <span style={{ color: "#9b0000" }}> summary </span>/
                <span style={{ color: "#9b0000" }}> skills </span>/
                <span style={{ color: "#9b0000" }}> background </span>
              </Text>
              <Box mt="50px">
                <Text>
                  I am a graduating student pursuing a Bachelor of Science in
                  Computer Science at Laguna University. My academic focus
                  extends beyond traditional coursework to include UI/UX design
                  and front-end development, reflecting my interest in creating
                  intuitive and visually appealing digital experiences.
                </Text>
                <Text mt="20px">
                  Outside of my academic pursuits, I dedicate my free time to
                  continuous learning, immersing myself in various topics
                  related to my field. When I'm not studying or coding, you'll
                  likely find me indulging in my hobbies, which include playing
                  video games, watching series, and enjoying cycling adventures.
                </Text>
              </Box>
              <Box bgColor="#9b0000" w="110vh" h="1vh" mt="5vh" />
              <Heading fontSize="46px" mt="5vh">
                my skills
              </Heading>
              <GoCodeReview />
            </Box>
          </VStack>
          <Image src={MeImg} borderRadius="60px" mt="50px" maxHeight="600px" />
        </Grid>
      </Box>
    </>
  );
}

export default Me;
