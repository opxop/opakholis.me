import Link from 'next/link';
import {
  Button,
  Heading,
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import Timeline from '@/components/Timeline';
import { NextjsIcon, ProgateIcon } from '@/styles/icons';

const Index = () => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <Container>
      <Box pb={5} pt={2}>
        <Heading as="h1" fontSize="5xl" letterSpacing="tight" my={5}>
          Hi, I'm Opa Kholis Majid.
        </Heading>
        <Text color={secondaryText} lineHeight="tall">
          Seseorang yang menyebut dirinya sebagai Frontend developer — yang mana
          sekarang sedang senang ber-eksplorasi dengan Linux distribution dan
          Open-source Software.
        </Text>
        <Link href="/about" passHref>
          <Button as="a" fontSize="sm" p={[6, 5]} my={5}>
            Selengkapnya tentang Opa
          </Button>
        </Link>
      </Box>

      <Box py={5}>
        <Heading as="h2" fontSize="4xl" letterSpacing="tight" mb={5}>
          Projects
        </Heading>
        <ProjectCard
          title="My Portfolio Website"
          description="NextJS - JAMstack application yang dikostumisasi dengan bantuan Chakra UI."
          href="https://opakholis.me/"
        >
          <NextjsIcon boxSize={12} mr={4} />
        </ProjectCard>
        <ProjectCard
          title="Progate Mini Project"
          description="Kumpulan Mini Project dari Komunitas Progate Indonesia."
          href="https://opxop.github.io/Progate-Mini-Projects"
        >
          <ProgateIcon boxSize={12} mr={4} />
        </ProjectCard>
      </Box>
      <Timeline />
    </Container>
  );
};

export default Index;
