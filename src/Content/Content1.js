import React from "react";
import { Box, Text, Image, Link, HStack } from "@chakra-ui/react";
import "@fontsource/oswald";
import "@fontsource/montserrat";
import Image1 from "../ImageAssets/giyop.png";
import Image2 from "../ImageAssets/esignage.jpeg";
import Image3 from "../ImageAssets/triplec.png";
import Image4 from "../ImageAssets/robotics.jpg";
import Image5 from "../ImageAssets/microbio.jpg";

function Content1({ selectedPortfolioIndex }) {
  // Array of portfolio items with content
  const portfolioItems = [
    {
      image: Image1,
      title: "Portfolio Website for Giyo Alvarez",
      tags: [
        { name: "UI/UX Design", color: "#EB513C" },
        { name: "Front-End", color: "#6BCAFF" },
        { name: "Back-End", color: "#95FF70" },
      ],
      link: "https://giyoalvarez.vercel.app/",
    },
    {
      image: Image2, // Image for Portfolio 2
      title: "Automatic Voice Notification for E-Signage",
      tags: [
        { name: "UI/UX Design", color: "#EB513C" },
        { name: "Front-End", color: "#6BCAFF" },
        { name: "Back-End", color: "#95FF70" },
      ],
      link: "https://play.google.com/store/apps/details?id=com.esignage.myapplication&pcampaignid=web_share",
    },
    {
      image: Image3, // Image for Portfolio 2
      title: "Arduino Based PMS",
      tags: [
        { name: "UI/UX Design", color: "#EB513C" },
        { name: "Front-End", color: "#6BCAFF" },
        { name: "Back-End", color: "#95FF70" },
      ],
      link: "http://triplec-parking.000webhostapp.com/?fbclid=IwZXh0bgNhZW0CMTAAAR3wF5Y0qUaljJAu1QDp_gFX0O_MsrlEGTcP4XhJOm0GaFe11gF2kqKWvSU_aem_AQmS6Wch6dRDTeyMcrWdicP-YnA7pgMCcOQHgKae3ivB8jLRj2Pan4PWnLAA52RV9oL7Iq6wCQfPl9mABXvbsgma",
    },
    {
      image: Image4, // Image for Portfolio 2
      title: "Division Robotics Competition",
      // tags: [ // Remove tags for this portfolio
      //   { name: "UI/UX Design", color: "#EB513C" },
      //   { name: "Front-End", color: "#6BCAFF" },
      //   { name: "Back-End", color: "#95FF70" },
      // ],
      // link: "http://triplec-parking.000webhostapp.com/?fbclid=IwZXh0bgNhZW0CMTAAAR3wF5Y0qUaljJAu1QDp_gFX0O_MsrlEGTcP4XhJOm0GaFe11gF2kqKWvSU_aem_AQmS6Wch6dRDTeyMcrWdicP-YnA7pgMCcOQHgKae3ivB8jLRj2Pan4PWnLAA52RV9oL7Iq6wCQfPl9mABXvbsgma",
    },
    {
      image: Image5, // Image for Portfolio 2
      title: "Top 5 Finalist Life Science Team",
      // tags: [ // Remove tags for this portfolio
      //   { name: "UI/UX Design", color: "#EB513C" },
      //   { name: "Front-End", color: "#6BCAFF" },
      //   { name: "Back-End", color: "#95FF70" },
      // ],
      // link: "http://triplec-parking.000webhostapp.com/?fbclid=IwZXh0bgNhZW0CMTAAAR3wF5Y0qUaljJAu1QDp_gFX0O_MsrlEGTcP4XhJOm0GaFe11gF2kqKWvSU_aem_AQmS6Wch6dRDTeyMcrWdicP-YnA7pgMCcOQHgKae3ivB8jLRj2Pan4PWnLAA52RV9oL7Iq6wCQfPl9mABXvbsgma",
    },
    // Add more portfolio items as needed
  ];

  const selectedItem = portfolioItems[selectedPortfolioIndex];

  return (
    <Box
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      fontFamily="Montserrat"
      pt="180px"
    >
      <Box textAlign="left" mr="40px">
        <Box w="80%" overflow="hidden" borderRadius="40px">
          <Image src={selectedItem.image} />
        </Box>
        <Box fontWeight="thin" pt="10px">
          <Text color="#ffffff" fontSize="24px">
            {selectedItem.title}
          </Text>
          {/* Render tags only if present */}
          {selectedItem.tags && (
            <Box>
              <HStack fontSize="16px" color="#ffffff" py="20px">
                {selectedItem.tags.map((tag, index) => (
                  <Box
                    key={index}
                    bgColor={tag.color}
                    py="6px"
                    px="18px"
                    borderRadius="18px"
                    overflow="hidden"
                  >
                    <Text>{tag.name}</Text>
                  </Box>
                ))}
              </HStack>
            </Box>
          )}
          {/* Render visit website link only if present */}
          {selectedItem.link && (
            <Box
              bgColor="transparent"
              px="18px"
              borderRadius="18px"
              overflow="hidden"
              display="inline-block"
              py="6px"
              color="#c93228"
              border="3px solid #c93228"
            >
              <Link
                href={selectedItem.link}
                fontSize="16px"
                _hover={{ textDecoration: "none" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontStyle="Montserrat"
                fontWeight="bold"
              >
                VISIT WEBSITE
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Content1;
