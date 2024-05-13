import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Text,
  Heading,
  Image,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import MeImg1 from "../Assets/MeImg/img7.JPG";
import MeImg2 from "../Assets/MeImg/dplander.jpeg";
import MeImg3 from "../Assets/MeImg/IMG_2988 copy.jpg";
import MeImg4 from "../Assets/MeImg/IMG_4013.jpg";
import MeImg5 from "../Assets/MeImg/IMG_2990.JPG";
import { GoCodeReview } from "react-icons/go";
import { FaLinesLeaning, FaLaptopCode } from "react-icons/fa6";
import { FaBookReader, FaGraduationCap } from "react-icons/fa";
import { Tilt } from "react-tilt";

function Me() {
  // State to store hover status
  const [isHovered, setIsHovered] = useState(false);
  // State to track whether image is clicked
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images
  const images = [MeImg1, MeImg2, MeImg3, MeImg4, MeImg5];

  // Function to toggle hover status
  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  // Function to toggle image click
  const toggleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Array of skills objects containing icon and text
  const skills = [
    {
      icon: GoCodeReview,
      text: "Experience with code review processes and effective collaboration with other developers to review and improve code quality, readability, and maintainability.",
    },
    {
      icon: FaLinesLeaning,
      text: "Commitment to continuous learning and staying updated with the latest technologies, tools, and best practices in the ever-evolving field of software development.",
    },
    {
      icon: FaBookReader,
      text: "Ability to analyze complex problems, break them down into smaller components, and develop effective solutions using logical reasoning and critical thinking.",
    },
    // Add more skills objects here if needed
  ];

  return (
    <>
      <Box
        bgColor="#e4e1db"
        borderRadius="60px 60px 0px 0px"
        pl="80px"
        pr="80px"
        pb="100px"
        pt="25px"
        boxShadow="0px -94px 50px rgba(14, 14, 14, 0.4)"
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
                  bg: "red.400",
                  borderRadius: "8px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  bg: "red.500",
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
              <Box mt="50px" fontFamily="Bebas Neue" fontSize="20px">
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
              {skills.map((skill, index) => (
                <HStack
                  key={index}
                  mt="20px"
                  flexDirection={index % 2 === 0 ? "row" : "row-reverse"} // Reverse position at odd index
                  gap="60px"
                >
                  {/* Use Icon component and adjust fontSize */}
                  <Icon as={skill.icon} fontSize="14vh" />
                  <Text fontFamily="Bebas Neue" fontSize="20px">
                    {skill.text}
                  </Text>
                </HStack>
              ))}
              <Heading fontSize="46px" mt="14vh">
                my background
              </Heading>
              <HStack color="#9b0000" mt="20px">
                <FaGraduationCap />
                <Text fontSize="20px" fontWeight="bold">
                  education
                </Text>
              </HStack>
              <Text mt="20px" fontFamily="Bebas Neue" fontSize="20px">
                Since 2020, I've studied computer science at Laguna University
                while serving as a photographer and layout artist for Digital
                Digest CCS Publications. In this role, I've honed my creative
                and technical skills, producing visually engaging content. These
                experiences have enriched my academic journey and allowed me to
                develop a diverse skill set.
              </Text>
              <HStack color="#9b0000" mt="20px">
                <FaLaptopCode />
                <Text fontSize="20px" fontWeight="bold">
                  experience
                </Text>
              </HStack>
              <Text mt="20px" fontFamily="Bebas Neue" fontSize="20px">
                Completed over 300 hours of internship at Blink Creative Studio.
              </Text>
            </Box>
          </VStack>
          <Box
            w="50%"
            h="10vh"
            position="relative"
            mt="20px"
            top="50%"
            bottom="50%"
          >
            <Tilt
              options={{
                maxTilt: 1,
                glare: true,
                maxGlare: 0.4,
                reverse: isHovered, // Reversing tilt if hovered
              }}
            >
              <Image
                src={images[currentImageIndex]}
                borderRadius="25px"
                h="75vh" // Adjusted to 100%
                w="100vh" // Adjusted to 100%
                objectFit="cover"
                top="50%"
                bottom="50%"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                onClick={toggleClick}
                boxShadow={
                  isHovered
                    ? "-15px 15px 50px rgba(0, 0, 0, .3)"
                    : "15px -15px 10px rgba(155, 0, 0, 0.2), -15px 15px 10px rgba(103, 0, 0, 0.2)"
                }
              />
            </Tilt>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Me;
