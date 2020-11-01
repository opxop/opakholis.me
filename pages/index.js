import React from "react";
import { Heading, Flex, Text, Box, Stack, useColorMode } from "@chakra-ui/core";

import Container from "../components/Container";
import Timeline from "../components/Timeline";

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxW="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mt={5} mb={4} as="h1" size="2xl">
            Halo, Saya Opa Kholis Majid
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Seseorang yang meyebut dirinya sebagai Front-end developer, yang
            mana sekarang sedang senang ber-ekplorasi dengan Linux distribution
            dan Open-source Software.
          </Text>
        </Flex>
        <Timeline />
      </Stack>
    </Container>
  );
};

export default Index;
