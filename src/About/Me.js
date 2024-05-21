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
  useBreakpointValue,
  useMediaQuery,
  Stack
} from "@chakra-ui/react";
import MeImg1 from "../Assets/MeImg/img7.JPG";
import MeImg2 from "../Assets/MeImg/IMG_2988 copy.jpg";
import MeImg3 from "../Assets/MeImg/IMG_2990.JPG";
import MeImg4 from "../Assets/MeImg/IMG_4013.jpg";
import MeImg5 from "../Assets/MeImg/dplander.jpeg";
import { GoCodeReview } from "react-icons/go";
import { FaLinesLeaning, FaLaptopCode } from "react-icons/fa6";
import {
  FaBookReader,
  FaGraduationCap,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Tilt } from "react-tilt";
import IconsContact from "./IconsContact";

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

  // Function to update image index periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

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

  // Responsive font sizes
  const headingFontSize = useBreakpointValue({ base: "56px", md: "72px" });
  const subHeadingFontSize = useBreakpointValue({ base: "40px", md: "46px" });
  const textFontSize = useBreakpointValue({ base: "16px", md: "20px" });
  const iconFontSize = useBreakpointValue({ base: "8vh", md: "14vh" });

  return (
    <>
      <Box
        bgColor="#e4e1db"
        borderRadius={{ base: "30px 30px 0px 0px", md: "60px 60px 0px 0px" }}
        pl={{ base: "20px", md: "80px" }}
        pr={{ base: "20px", md: "80px" }}
        pb={{ base: "50px", md: "100px" }}
        pt={{ base: "25px", md: "25px" }} // You can adjust this if needed
        boxShadow="0px -94px 50px rgba(14, 14, 14, 0.4)"
        maxW={{ base: "95%", md: "98.7vw" }} // Adjust max width for responsiveness
        mx="auto" // Center align horizontally
      >
        <Grid
          gap="40px"
          // display="flex"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gridTemplateRows={{ base: "1fr 1fr", md: "1fr" }}
        >
          <VStack alignItems="flex-start" mt="50px">
            <Box
              pr={{ base: "20px", md: "40px" }}
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
              <Heading fontSize={headingFontSize}>about me...</Heading>
              <Text fontSize={textFontSize} fontWeight="bold">
                <span style={{ color: "#9b0000" }}> summary </span>/
                <span style={{ color: "#9b0000" }}> skills </span>/
                <span style={{ color: "#9b0000" }}> background </span>
              </Text>
              <Box
                mt="50px"
                fontFamily="Bebas Neue"
                fontSize={textFontSize}
                color="#000000"
              >
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
              <Box bgColor="#9b0000" w="100%" h="2px" mt="5vh" />
              <Heading fontSize={subHeadingFontSize} mt="5vh">
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
                  <Icon
                    as={skill.icon}
                    fontSize={iconFontSize}
                    color="#9b0000"
                  />
                  <Text
                    fontFamily="Bebas Neue"
                    fontSize={textFontSize}
                    color="#000000"
                  >
                    {skill.text}
                  </Text>
                </HStack>
              ))}
              <Heading fontSize={subHeadingFontSize} mt="14vh">
                my background
              </Heading>
              <HStack color="#9b0000" mt="20px">
                <FaGraduationCap />
                <Text fontSize={textFontSize} fontWeight="bold">
                  education
                </Text>
              </HStack>
              <Text
                mt="20px"
                fontFamily="Bebas Neue"
                fontSize={textFontSize}
                color="#000000"
              >
                Since 2020, I've studied computer science at Laguna University
                while serving as a photographer and layout artist for Digital
                Digest CCS Publications. In this role, I've honed my creative
                and technical skills, producing visually engaging content. These
                experiences have enriched my academic journey and allowed me to
                develop a diverse skill set.
              </Text>
              <HStack color="#9b0000" mt="20px">
                <FaLaptopCode />
                <Text fontSize={textFontSize} fontWeight="bold">
                  experience
                </Text>
              </HStack>
              <Text
                mt="20px"
                fontFamily="Bebas Neue"
                fontSize={textFontSize}
                color="#000000"
              >
                Completed over 300 hours of internship at Blink Creative Studio.
              </Text>
            </Box>
          </VStack>
          <Grid
            gridTemplateColumns={{ base: "1fr", md: "90% 10%" }}
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              // gridRow={{ base: "2", md: "auto" }} // Place the Box in row 2 for mobile view
            >
              <Tilt
                options={{
                  maxTilt: 0.5,
                  glare: true,
                  maxGlare: 0.4,
                  reverse: isHovered, // Reversing tilt if hovered
                }}
              >
                <Image
                  src={images[currentImageIndex]}
                  borderRadius="25px"
                  h={{ base: "50vh", md: "80vh" }}
                  w={{ base: "70vw", md: "60vh" }}
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
            </Box>{" "}
            <IconsContact/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Me;
