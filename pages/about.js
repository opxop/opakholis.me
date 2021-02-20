import { NextSeo } from 'next-seo';
import { Text, Heading, Box, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';

const url = 'https://opakholis.me/about';
const title = 'About Me - Opa Kholis Majid';

const About = () => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <Container>
        <Box pb={5} pt={2}>
          <Heading as="h1" fontSize="5xl" letterSpacing="tight" my={5}>
            About Me.
          </Heading>
          <Box>
            <Text color={secondaryText} lineHeight="tall">
              Halo! Perkenalkan, saya Opa.
            </Text>
            <Text color={secondaryText} lineHeight="tall" py={3}>
              Seorang Frontend developer (anggap saja begitu) yang mana sekarang
              sedang senang ber-eksplorasi dengan Linux distribution dan
              Open-source Software.
            </Text>
            <Text color={secondaryText} lineHeight="tall" py={3}>
              Terlepas dari OSS, ketertarikan utama saya adalah segala sesuatu
              yang berhubungan dengan <s>ngodomf</s> ngoding. Saat ini saya
              menggunakan NodeJs dan library React sebagai stack-nya, kadang
              juga khilaf dengan berkecimpung pada mobile development dengan
              menggunakan Framework Flutter, ~ehhe.
            </Text>
            <Text color={secondaryText} lineHeight="tall" py={3}>
              Karena saya manusia sosial, jadi gak sepenuhnya saya mengahabiskan
              waktu di depan teks editor. Dan untuk mengistirahatkan otak, saya
              meluangkan waktu untuk sekedar mendengarkan musik, menonton
              film—terlebih jejepangan—atau bahkan membaca buku untuk menambah
              <i> insight</i> baru. "sosial dimananya ha?"
            </Text>

            <Text color={secondaryText} lineHeight="tall" py={3}>
              Dan dengan adanya situs ini, saya harap dapat menjadi jejak bagi
              saya pribadi dalam mengembangkan diri—menjadi lebih baik—dengan
              mendokumentasikan segala sesuatu yang sedang dan/atau telah saya
              pelajari{' '}
              <i>
                (semoga gak malas-malasan supaya kedepannya situs ini tetap
                hidup)
              </i>
              .
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
