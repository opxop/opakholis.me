import { NextSeo } from 'next-seo';
import { Heading, Flex, Text, useColorMode } from '@chakra-ui/react';

import Container from '@/components/Container';
import { CustomLink } from '@/components/MDXComponents';

export default function UsesLayout({ children }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <NextSeo
        title="Uses - Opa Kholis Majid"
        description="What i use… and why?"
        canonical="https://opakholis.me/uses"
        openGraph={{
          url: 'https://opakholis.me/uses',
          title: 'Uses - Opa Kholis Majid',
          description: 'What i use… and why?'
        }}
      />
      2
      <Flex
        as="article"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        w="100%"
      >
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          What I Use
        </Heading>
        <Flex mt={2} w="100%">
          <Text mt={2} color={textColor[colorMode]}>
            This page is inspired by&nbsp;
            <CustomLink href="https://wesbos.com/">Wes Bos</CustomLink>&nbsp;and
            listed&nbsp;
            <CustomLink href="https://uses.tech">uses.tech</CustomLink>, here
            you can find some info, about what I use on everyday basis -
            software, hardware and some personal gear.
          </Text>
        </Flex>
      </Flex>
      {children}
    </Container>
  );
}
