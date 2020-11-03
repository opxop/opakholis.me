import React from 'react';
import {
  List,
  ListItem,
  Text,
  Flex,
  Heading,
  useColorMode,
  Box,
  Link,
  Divider
} from '@chakra-ui/core';
import { NextSeo } from 'next-seo';

import Container from '../components/Container';

const url = 'https://opakholis.me/about';
const title = 'About Me - Opa Kholis Majid';

const About = () => {
  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxW="700px"
        >
          <Heading letterSpacing="tight" mb={4} as="h1" size="xl">
            About Me
          </Heading>
          <Box>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Halo! Perkenalkan, saya Opa.
            </Text>
            <Text color={secondaryTextColor[colorMode]}>
              Ya, sehari-harinya saya dipanggil dengan panggilan "Opa". Nama
              yang membuat beberapa orang yang baru ditemuinya memasang ekspresi
              raut wajah keheranan, bahkan tidak sedikit yang penasaran dan
              menanyakan alasan orang tua saya memberikan anugerah nama
              tersebut.
              <br />
              karena saya berusaha menjadi seorang anak yang baik, saya tidak
              pernah protes akan nama tersebut sampai hari ini.
            </Text>
            <Divider
              my={4}
              border="1px"
              width="20px"
              borderColor={secondaryTextColor[colorMode]}
            />
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Saya adalah seorang Frontend developer yang mana sekarang sedang
              senang ber-ekplorasi dengan Linux distribution dan Open-source
              Software.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Saat tidak berada depan teks editor, saya menghabiskan waktu luang
              dengan menonton film, anime, baca buku, juga mendengarkan musik.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Untuk mengetahui apa yang sedang saya dengarkan, bisa kunjungi
              akun{' '}
              <Link
                href="https://open.spotify.com/user/xil3nxol9wadm6lgyw5qv1l2h?si=4xGaa8Y0T3KjpJcaJI7OXQ"
                color="whatsapp.500"
                isExternal
              >
                Spotify
              </Link>{' '}
              saya.
            </Text>
            <Heading letterSpacing="tight" mt={16} mb={4} as="h2" size="xl">
              Stuff
            </Heading>
            <List
              styleType="disc"
              spacing={2}
              color={secondaryTextColor[colorMode]}
            >
              <ListItem>OS : Manjaro Linux + Openbox WM</ListItem>
              <ListItem>Domain : Hostinger</ListItem>
              <ListItem>Blog Engine : Next.js + MDX</ListItem>
              <ListItem>SSL : Let’s Encrypt</ListItem>
              <ListItem>Mail Service : ProtonMail</ListItem>
              <ListItem>Text Editor : Visual Studio Code</ListItem>
            </List>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default About;
