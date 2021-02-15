import { NextSeo } from 'next-seo';
import {
  Text,
  Flex,
  Heading,
  Box,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

const url = 'https://opakholis.me/about';
const title = 'About Me - Opa Kholis Majid';

const About = () => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <Container>
        <Box py={5}>
          <Heading as="h1" fontSize="5xl" letterSpacing="tight" my={5}>
            About Me.
          </Heading>
          <Box>
            <Text color={secondaryText}>Halo! Perkenalkan, saya Opa.</Text>
            <Text color={secondaryText} py={3}>
              Saya adalah seorang Frontend developer (anggap saja begitu) yang
              mana sekarang sedang senang ber-eksplorasi dengan Linux
              distribution dan Open-source Software.
            </Text>
            <Text color={secondaryText} py={3}>
              Terlepas dari ketertarikan pada OSS, kesibukan saya sebenarnya
              adalah mengembangkan skill programming. Dengan menggunakan stack
              dari bahasa javascript modern yaitu NodeJs dan library React,
              kadang juga khilaf dengan berkecimpung pada mobile development
              dengan menggunakan Framework Flutter, ~ehhe.
            </Text>
            <Text color={secondaryText} py={3}>
              Karena saya manusia sosial, jadi gak sepenuhnya saya mengahabiskan
              waktu di depan teks editor. Dan untuk mengistirahatkan otak, saya
              meluangkan waktu untuk sekedar mendengarkan musik, menonton
              film—terlebih jejepangan—atau bahkan membaca buku untuk menambah
              insight baru(?). "sosial dimananya ha?"
            </Text>

            <Text color={secondaryText} py={3}>
              Dan dengan adanya situs ini, saya harap dapat menjadi acuan bagi
              saya dalam pengembangan diri—menjadi lebih baik—dengan
              mendokumentasikan segala sesuatu yang sedang dan/atau telah saya
              pelajari (semoga gak malas-malasan supaya kedepannya situs ini
              tetap hidup).
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
