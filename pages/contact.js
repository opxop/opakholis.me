import { NextSeo } from 'next-seo';
import { Text, Heading, VStack, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

const url = 'https://opakholis.dev/contact';
const title = 'Kontak - Opa Kholis Majid';
const description = 'Cara menghubungi Opa di internet';

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
            Mari Berkenalan.
          </Heading>
          <VStack
            color={secondaryText}
            spacing={3}
            alignItems="flex-start"
            lineHeight="tall"
          >
            <Text>
              Saya punya beberapa akun Sosial Media pada umumnya seperti
              Instagram, Twitter, Facebook, Discord, <strike>Reddit</strike>,
              Slack tapi jarang sekali dibuka.
            </Text>
            <Text>
              Jika kamu ingin berkomunikasi dengan saya, saya cukup aktif di{' '}
              <CustomLink href="https://t.me/opakholis/">Telegram</CustomLink>.
              Bisa juga berkirim pesan lewat surat elektronik saya di{' '}
              <CustomLink href="mailto:hi@opakholis.dev">
                hi@opakholis.dev.
              </CustomLink>
            </Text>
            <Text>
              Dan hei! jika kamu punya pendapat yang ingin disampaikan, jangan
              sungkai untuk ditulis dan dikirim lewat{' '}
              <CustomLink href="/advices">sini</CustomLink>.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </>
  );
}
