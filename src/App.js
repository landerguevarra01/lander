import React, { useState, useEffect } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Hero from "./Homepage/Hero";
import Navigation from "./Nav/Navigation";
import { BiMenuAltRight } from "react-icons/bi";
import Me from "./About/Me";
import Reach from "./Contact/Contact";
import Projects from "./Porfolio/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || "hero"
  );
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const toggleNavigation = () => {
    setCurrentPage((prevPage) =>
      prevPage === "navigation" ? previousPage || "hero" : "navigation"
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case "hero":
        return <Hero setCurrentPage={setCurrentPage} />;
      case "navigation":
        return <Navigation setCurrentPage={setCurrentPage} />;
      case "about":
        return <Me />;
      case "contact":
        return <Reach />;
      case "projects":
        return <Projects />;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  const isLightPage = currentPage === "about" || currentPage === "contact";

  const navBackgroundColor = isLightPage ? "white" : "transparent";
  const navTextColor = isLightPage ? "black" : "white";
  const headingColor = isLightPage ? "black" : "#ffffff";
  const hoverColor = isLightPage ? "#000000" : "#ffffff";

  const headingHoverStyle = {
    color: headingColor,
    _hover: { color: hoverColor },
  };

  const menuButtonHoverStyle = {
    _hover: { color: hoverColor },
  };

  return (
    <Box>
      <Flex
        position="fixed"
        top="10px"
        left="10px"
        right="10px"
        zIndex="999"
        cursor="pointer"
        justifyContent="space-between"
        alignItems="center"
        bg={navBackgroundColor}
        color={navTextColor}
      >
        <Box onClick={() => setCurrentPage("hero")} {...headingHoverStyle}>
          <Heading cursor="pointer" fontFamily="Oswald" fontWeight="500px">
            LG
          </Heading>
        </Box>
        <Flex>
          <Box onClick={toggleNavigation} _hover={menuButtonHoverStyle._hover}>
            <BiMenuAltRight fontSize="36px" />
          </Box>
        </Flex>
      </Flex>

      {renderPage()}
    </Box>
  );
}

export default App;
