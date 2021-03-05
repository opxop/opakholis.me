import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import Timeline from '@/components/Timeline';
import { ReactIcon } from '@/styles/icons';
import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';

const Index = () => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <Container>
      <Box pb={5} pt={2}>
        <Heading as="h1" fontSize="5xl" letterSpacing="tight" my={5}>
          Halo Semua!
        </Heading>
        <Text color={secondaryText} lineHeight="tall">
          Perkenalkan, nama saya Opa Kholis Majid. Seseorang yang menyebut
          dirinya sebagai Frontend developer—yang mana sekarang sedang senang
          ber-eksplorasi dengan Linux distribution dan Open-source Software.
        </Text>
        <Link href="/about" passHref>
          <Button as="a" fontSize="sm" p={[6, 5]} my={5}>
            Selengkapnya tentang Opa
          </Button>
        </Link>
      </Box>

      <Box py={5}>
        <Heading as="h2" fontSize="4xl" letterSpacing="tight" mb={5}>
          Project Terbaru
        </Heading>
        <ProjectCard
          title="React21"
          description="Kumpulan project-project kecil yang saya pelajari dari internet. Dibangun diatas Library React.js dan di deploy menggunakan vercel."
          href="https://react21.vercel.app"
        >
          <ReactIcon boxSize={12} mr={4} />
        </ProjectCard>
      </Box>
      <Timeline />
    </Container>
  );
};

export default Index;
