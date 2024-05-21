import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Box, Stack } from "@chakra-ui/react";

function IconsContact() {
    const iconSize = "2rem";
    const handleGmailClick = (e) => {
      e.preventDefault(); // Prevent the default action of the anchor tag
      navigator.clipboard
        .writeText("guevarralander0@gmail.com")
        .then(() => {
          alert("Email address copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy email address: ", err);
        });
    };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack direction={{ base: "row", md: "column" }} spacing={4}>
        <Box
          color="#00A3FF"
          as="a"
          href="https://www.facebook.com/lander.guevarra.9"
          _hover={{
            transform: "scale(1.1)",
            filter: "drop-shadow(0 0 0.75rem #00A3FF)",
            backgroundColor: "#00A3FF",
            color: "#ffffff",
            borderRadius: "50%",
            padding: "0.5rem",
            transition: "all 0.3s ease-in-out", // Add transition
          }}
        >
          <FaFacebookSquare size={iconSize} />
        </Box>
        <Box
          color="#d44638"
          as="a"
          href="#"
          onClick={handleGmailClick}
          _hover={{
            transform: "scale(1.1)",
            filter: "drop-shadow(0 0 0.75rem #d44638)",
            backgroundColor: "#d44638",
            color: "#ffffff",
            borderRadius: "50%",
            padding: "0.5rem",
            transition: "all 0.3s ease-in-out", // Add transition
          }}
        >
          <SiGmail size={iconSize} />
        </Box>
        <Box
          color="#333333"
          as="a"
          href="https://github.com/landerguevarra01"
          _hover={{
            transform: "scale(1.1)",
            filter: "drop-shadow(0 0 0.75rem #333333)",
            backgroundColor: "#333333",
            color: "#ffffff",
            borderRadius: "50%",
            padding: "0.5rem",
            transition: "all 0.3s ease-in-out", // Add transition
          }}
        >
          <FaGithub size={iconSize} />
        </Box>
        <Box
          color="#0a66c2"
          as="a"
          href="https://linkedin.com/in/lander-guevarra21"
          _hover={{
            transform: "scale(1.1)",
            filter: "drop-shadow(0 0 0.75rem #0a66c2)",
            backgroundColor: "#0a66c2",
            color: "#ffffff",
            borderRadius: "50%",
            padding: "0.5rem",
            transition: "all 0.3s ease-in-out", // Add transition
          }}
        >
          <FaLinkedin size={iconSize} />
        </Box>
      </Stack>
    </Box>
  );
}

export default IconsContact;
