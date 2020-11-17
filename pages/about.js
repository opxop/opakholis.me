import React from 'react';
import {
  List,
  ListItem,
  Text,
  Flex,
  Heading,
  useColorMode,
  Box,
  Divider
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';

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
          <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
            About Me
          </Heading>
          <Box>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Halo! Perkenalkan, saya Opa.
            </Text>
            <Text color={secondaryTextColor[colorMode]}>
              Ya, sehari-harinya saya dipanggil dengan panggilan "Opa". Sebuah
              nama yang kadang membuat orang memasang raut wajah keheranan
              setelah <Text as="s">bertukar nama</Text>
              &nbsp;mengetahui nama saya ini, bahkan tidak sedikit yang
              penasaran dan menanyakan alasan orang tua saya memberikan anugerah
              nama tersebut.
              <br />
              <br />
              karena saya berusaha menjadi seorang anak yang baik, saya tidak
              pernah protes sampai hari ini.
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
              Saya tidak sepenuhnya mengahabiskan waktu di depan teks editor.
              Untuk menjernihkan pikiran, saya meluangkan waktu untuk sekedar
              mendengarkan musik; menonton film, terlebih anime dan dorama; atau
              bahkan membaca buku untuk menambah insight baru?.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Untuk mengetahui apa saja yang saya dengarkan, bisa kunjungi
              akun&nbsp;
              <CustomLink href="https://open.spotify.com/user/xil3nxol9wadm6lgyw5qv1l2h?si=4xGaa8Y0T3KjpJcaJI7OXQ">
                Spotify
              </CustomLink>
              &nbsp;saya.
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
              <ListItem>Text Editor : Visual Studio Code</ListItem>
            </List>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default About;
