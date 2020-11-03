import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';

import Skill from './Skill';

const Landing = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
    >
      <Heading letterSpacing="tight" mb={4} as="h1" size="xl">
        👋 Hi, I'm Opa Kholis Majid.
      </Heading>
      <Text color={secondaryTextColor[colorMode]}>
        Seseorang yang meyebut dirinya sebagai Frontend developer😁 - yang mana
        sekarang sedang senang ber-ekplorasi dengan Linux distribution dan
        Open-source Software.
      </Text>
      <Skill />
      <NextLink href="/about" passHref>
        <Button size="sm" p={[4, 4]} mt={5}>
          Selengkapnya tentang Opa
        </Button>
      </NextLink>
    </Flex>
  );
};

export default Landing;
