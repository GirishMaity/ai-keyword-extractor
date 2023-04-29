import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import logo from "../assets/idea.svg";
import search from "../assets/searching.json";

const Header = () => {
  return (
    <>
      <Box display="flex" alignItems={"center"} justifyContent="center">
        {/* <Image src={logo} alt="logo" width={100} marginBottom="1rem" /> */}
        <Player
          src={search}
          background="transparent"
          speed="1"
          style={{ width: "10em", height: "10em" }}
          loop
          controls
          autoplay
        />
        <Heading color="white" marginBottom="1rem">
          AI Keyword Extractor
        </Heading>
      </Box>

      <Text fontSize={25} textAlign="center">
        Let AI do the heavy lifting and extract the keywords for you
      </Text>
    </>
  );
};

export default Header;
