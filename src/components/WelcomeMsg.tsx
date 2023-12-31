import { Box, Text, VStack } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import downarrow from "../assets/Lottie/DownArrow.json";
import mountains from "../assets/flatmountains.png";

const toProjects = () => {
  window.scrollTo({ top: 900, behavior: "smooth" });
};

const WelcomeMsg = () => {
  return (
    <>
      <Box
        maxW="100%"
        h="900px"
        marginTop={"80px"}
        backgroundImage={mountains}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <VStack spacing="30px">
          <Text
            fontSize={{
              base: "6xl",
              sm: "6xl",
              md: "6xl",
              lg: "5xl",
              xl: "5xl",
              "2xl": "5xl",
            }}
            textColor="black"
            textAlign="center"
            fontWeight="bold"
            letterSpacing="3px"
            marginTop="200px"
          >
            HEY, I'M DYLAN ANCTIL
          </Text>
          <Text
            fontSize={{
              base: "3xl",
              sm: "3xl",
              md: "3xl",
              lg: "2xl",
              xl: "2xl",
              "2xl": "2xl",
            }}
            mx="8%"
            textColor="black"
            fontWeight={300}
            align="center"
          >
            Dive into a gallery of digital creations showcasing my skill,
            creativity, and endless curiosity, all wrapped up in code.
          </Text>
          <Box
            as="button"
            marginTop="15px"
            background="#6E07F3"
            color="white"
            width="240px"
            height="50px"
            borderColor="white"
            borderRadius="7px"
            fontStyle="normal"
            fontFamily=""
            fontWeight={600}
            fontSize="20px"
            letterSpacing="2px"
            transition="all .25s ease"
            _hover={{ transform: "scale(1.2)" }}
            onClick={toProjects}
          >
            PROJECTS
          </Box>
        </VStack>
      </Box>
      <Box marginTop="-150px">
        <Player
          src={downarrow}
          className="player"
          style={{ height: "150px", width: "150px" }}
          loop
          autoplay
        />
      </Box>
    </>
  );
};

export default WelcomeMsg;
