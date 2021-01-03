import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';

import Container from '../components/Container';

import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  return (
    <Container>
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
          Seseorang yang menyebut dirinya sebagai Frontend developer - yang mana
          sekarang sedang senang ber-ekplorasi dengan Linux distribution dan
          Open-source Software.
        </Text>
        <NextLink href="/about" passHref>
          <Button size="sm" p={[4, 4]} mt={5}>
            Selengkapnya tentang Opa
          </Button>
        </NextLink>
      </Flex>
      {/* Project section */}
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
      >
        <Heading letterSpacing="tight" mb={4} mt={8} size="xl" fontWeight={700}>
          Projects
        </Heading>
        <ProjectCard
          title="My Portfolio Website"
          description="NextJS - JAMstack application yang dikostumisasi dengan bantuan Chakra UI."
          href="https://opakholis.me/"
          icon="nextjs"
        />
        <ProjectCard
          title="Progate Mini Project"
          description="Kumpulan Mini Project dari Komunitas Progate Indonesia."
          href="https://opxop.github.io/Progate-Mini-Projects"
          icon="progate"
        />
      </Flex>
      <Timeline />
    </Container>
  );
};

export default Index;
