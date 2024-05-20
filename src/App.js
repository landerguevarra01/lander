import { useEffect, useState } from "react";
import { Heading, VStack, Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import HeroComponent from "./Hero/HeroComponent.js";
import Me from "./About/Me.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Contact from "./Contact/Contact.js";
import Language from "./Bouncing/Language.js";

function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [inView]);

  return (
    <Box
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.6s ease-in-out, transform 0.6s ease-in-out"
      transform={isVisible ? "translateY(0)" : "translateY(20px)"}
      willChange="opacity, transform"
    >
      {children}
    </Box>
  );
}

function App() {
  return (
    <VStack bgColor="#0d0d0d">
      <Box position="sticky" top="0" zIndex="1" overflow="visible">
        <HeroComponent />
      </Box>
      <Box mt="100px" zIndex="2" bgColor="#0e0e0e" overflow="visible">
        <FadeInSection>
          <Me />
        </FadeInSection>
        <FadeInSection>
          <Portfolio />
        </FadeInSection>
        <FadeInSection>
          <Language />
        </FadeInSection>
        <Box>
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </Box>
      </Box>
    </VStack>
  );
}

export default App;
