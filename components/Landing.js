import React from "react";
import { Flex, Heading, Text, useColorMode } from "@chakra-ui/core";

import Skill from "./Skill";

const Landing = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
    >
      <Heading letterSpacing="tight" my={5} as="h1" size="2xl">
        Halo, Saya Opa Kholis Majid
      </Heading>
      <Text color={secondaryTextColor[colorMode]}>
        Seseorang yang meyebut dirinya sebagai Frontend developer😁 - yang mana
        sekarang sedang senang ber-ekplorasi dengan Linux distribution dan
        Open-source Software.
      </Text>
      <Skill />
    </Flex>
  );
};

export default Landing;
