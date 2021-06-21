import { NextSeo } from 'next-seo';
import { Text, Heading, VStack, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

const url = 'https://opakholis.dev/whoami';
const title = 'Tentang - Opa Kholis Majid';
const description =
  'Saya sangat tertarik dengan dunia pemrograman dan Open-source Software. Saat ini sedang belajar tentang sisi Frontend dari platform web menggunakan bahasa pemrogramanan JavaScript serta UI Library React.Js.';

export default function About() {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <VStack pb={5} pt={2} alignItems="flex-start">
          <Heading
            as="h1"
            fontSize={['4xl', '5xl']}
            letterSpacing="tight"
            my={5}
          >
            Tentang.
          </Heading>
          <VStack
            color={secondaryText}
            spacing={3}
            alignItems="flex-start"
            lineHeight="tall"
          >
            <Text>Halo semua, nama saya Opa Kholis Majid.</Text>
            <Text>
              Saya sangat tertarik dengan dunia pemrograman dan Open-source
              Software. Saat ini sedang belajar tentang sisi Frontend dari
              platform web menggunakan bahasa pemrogramanan JavaScript serta UI
              Library React.Js.
            </Text>
            <Text>
              Sebagaimana pada manusia umumnya, saya tidak sepenuhnya
              mengahabiskan waktu di depan <strike>teks editor</strike> IDE.
              Selain ngoding saya juga suka membaca buku, manga dan tulisan
              orang lain, menonton film jejepangan—anime dan dorama, dan
              mendengarkan musik.
            </Text>
            <Text>
              Jangan sungkan untuk&nbsp;
              <CustomLink href="/contact">menyapa saya</CustomLink> khususnya
              melalui surat elektronik, karena saya senang berkomunikasi dan
              khususnya berkenalan dengan orang baru.
            </Text>
            <Text>Anyway, senag berkenalan denganmu!</Text>
          </VStack>
        </VStack>
      </Container>
    </>
  );
}
