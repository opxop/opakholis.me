import { NextSeo } from 'next-seo';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

const url = 'https://opakholis.me/about';
const title = 'Tentang Opa Kholis Majid';

const About = () => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <Container>
        <Box pb={5} pt={2}>
          <Heading as="h1" fontSize="5xl" letterSpacing="tight" my={5}>
            Tentang Saya.
          </Heading>
          <Box>
            <Text color={secondaryText} lineHeight="tall">
              Halo! Perkenalkan, nama saya Opa.
            </Text>
            <Text color={secondaryText} lineHeight="tall" py={3}>
              Seseorang yang menyebut dirinya sebagai Frontend developer—yang
              mana sekarang sedang senang ber-eksplorasi dengan Linux
              distribution dan Open-source Software.
            </Text>
            <Text color={secondaryText} lineHeight="tall" py={3}>
              Terlepas dari OSS, ketertarikan utama saya adalah segala sesuatu
              yang berhubungan dengan <s>ngodomf</s> pemrograman dan
              pengembangan perangkat lunak. Saat ini saya menggunakan NodeJs dan
              library React sebagai stack utama, kadang juga khilaf pada mobile
              development dengan menggunakan Framework Flutter. ~ehhe.
            </Text>
            <Text color={secondaryText} lineHeight="tall" py={3}>
              Sebagaimana pada manusia umumnya, saya tidak sepenuhnya
              mengahabiskan waktu di depan teks editor. Selain ngoding saya juga
              suka membaca buku, mendengarkan musik, menonton film
              jejepangan—anime dan dorama.
            </Text>

            <Text color={secondaryText} lineHeight="tall" py={3}>
              Jangan sungkan untuk&nbsp;
              <CustomLink href="/contact">menyapa saya</CustomLink> khususnya
              melalui surat elektronik, karena saya senang berkomunikasi dan
              khususnya berkenalan dengan orang baru.
            </Text>

            <Text color={secondaryText} lineHeight="tall" py={3}>
              Ngomong-ngomong, selamat datang di rumah digital saya!
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
