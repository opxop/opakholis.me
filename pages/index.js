import React from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Heading,
  Text,
  Box,
  useColorMode,
  Button
} from '@chakra-ui/react';

import Container from '../components/Container';
import TechList from '../components/TechList';
import Timeline from '../components/Timeline';
import ProjectCard from '../components/ProjectCard';

// icons
import { NextJS } from '../styles/icons/nextjs';
import { Progate } from '../styles/icons/progate';

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
          Seseorang yang menyebut dirinya sebagai Frontend developer — yang mana
          sekarang sedang senang ber-ekplorasi dengan Linux distribution dan
          Open-source Software.
        </Text>
        <Text color={secondaryTextColor[colorMode]} mt={4} mb={2}>
          Beberapa teknologi yang saya gunakan :
        </Text>
        <Flex>
          <Box mr={20}>
            <TechList name="Javascript" />
            <TechList name="React" />
            <TechList name="Node.js" />
          </Box>
          <Box>
            <TechList name="Flutter" />
            <TechList name="Git" />
          </Box>
        </Flex>
        <NextLink href="/about" passHref>
          <Button size="sm" p={[4, 4]} mt={6}>
            Selengkapnya tentang Opa
          </Button>
        </NextLink>
      </Flex>

      {/* project section */}
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading
          letterSpacing="tight"
          mb={4}
          mt={16}
          size="xl"
          fontWeight={700}
        >
          Projects
        </Heading>
        <ProjectCard
          title="My Portfolio Website"
          description="NextJS - JAMstack application yang dikostumisasi dengan bantuan Chakra UI."
          href="https://opakholis.me/"
          icon={<NextJS w={10} h={10} />}
        />
        <ProjectCard
          title="Progate Mini Project"
          description="Sebuah Mini Project dari Komunitas Progate Indonesia. Dibangun menggunakan Tailwind CSS, Google API, dan Github Pages."
          href="https://opxop.github.io/Progate-Mini-Projects"
          icon={<Progate w={10} h={10} />}
        />
      </Flex>
      <Timeline />
    </Container>
  );
};

export default Index;
