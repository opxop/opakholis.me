import { NextSeo } from 'next-seo';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

const url = 'https://opakholis.dev/contact';
const title = 'Mari Ngobrol! - Opa Kholis Majid';

export default function About() {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <Container>
        <Box pb={5} pt={2}>
          <Heading as="h1" fontSize="5xl" letterSpacing="tight" my={5}>
            Mari Ngobrol.
          </Heading>
          <Box>
            <Text color={secondaryText} lineHeight="tall">
              Saya punya beberapa akun <b>Sosial Media</b> pada umumnya seperti
              Instagram, Twitter, Facebook, Discord, <strike>Reddit</strike>,
              Slack dan sejenisnya. Tapi jarang sekali dibuka. Hanya ketika
              senggang saja.
            </Text>
            <Text color={secondaryText} lineHeight="tall" my={4}>
              Jika kamu ingin berkomunikasi dengan saya, saya cukup aktif di{' '}
              <CustomLink href="https://t.me/opakholis/">Telegram</CustomLink>.
              Bisa juga berkirim pesan lewat surat elektronik saya di{' '}
              <CustomLink href="mailto:hi@opakholis.dev">
                hi@opakholis.dev.
              </CustomLink>
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
