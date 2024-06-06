import { Link, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import "@fontsource/montserrat";
import "./Navigation.css"; // Import the CSS file

function Navigation({ setCurrentPage }) {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="center" // Center horizontally
      alignItems="center" // Center vertically
      height="100vh"
      width="100vw"
      bgColor="#000000"
    >
      <Box
        display="flex"
        flexDirection="column"
        p="10px"
        fontSize="22px"
        alignItems="flex-start" // Align links at the start
        fontFamily="Montserrat"
        fontWeight="thin"
        letterSpacing="8px"
      >
        {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((page, index) => (
          <Link
            key={index}
            onClick={() => setCurrentPage(page.toLowerCase())}
            onMouseEnter={() => {
              switch (page) {
                case "HOME":
                  setIsHomeHovered(true);
                  break;
                case "ABOUT":
                  setIsAboutHovered(true);
                  break;
                case "PROJECTS":
                  setIsProjectsHovered(true);
                  break;
                case "CONTACT":
                  setIsContactHovered(true);
                  break;
                default:
                  break;
              }
            }}
            onMouseLeave={() => {
              switch (page) {
                case "HOME":
                  setIsHomeHovered(false);
                  break;
                case "ABOUT":
                  setIsAboutHovered(false);
                  break;
                case "PROJECTS":
                  setIsProjectsHovered(false);
                  break;
                case "CONTACT":
                  setIsContactHovered(false);
                  break;
                default:
                  break;
              }
            }}
            _hover={{ textDecoration: "none" }}
            color={
              page === "HOME"
                ? isHomeHovered
                  ? "#c93228"
                  : "#ffffff"
                : page === "ABOUT"
                ? isAboutHovered
                  ? "#c93228"
                  : "#ffffff"
                : page === "PROJECTS"
                ? isProjectsHovered
                  ? "#c93228"
                  : "#ffffff"
                : isContactHovered
                ? "#c93228"
                : "#ffffff"
            }
            fontWeight={
              page === "HOME"
                ? isHomeHovered
                  ? "bold"
                  : "normal"
                : page === "ABOUT"
                ? isAboutHovered
                  ? "bold"
                  : "normal"
                : page === "PROJECTS"
                ? isProjectsHovered
                  ? "bold"
                  : "normal"
                : isContactHovered
                ? "bold"
                : "normal"
            }
            mb="10px" // Add margin bottom
            mt="10px" // Add margin top
          >
            <span
              style={{
                visibility:
                  (page === "HOME" && isHomeHovered) ||
                  (page === "ABOUT" && isAboutHovered) ||
                  (page === "PROJECTS" && isProjectsHovered) ||
                  (page === "CONTACT" && isContactHovered)
                    ? "visible"
                    : "hidden",
                fontSize: "22px",
              }}
            >
              &rarr;{" "}
            </span>
            {page}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Navigation;
