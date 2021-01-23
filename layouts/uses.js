import { NextSeo } from 'next-seo';
import { Heading, Flex, Text, useColorMode } from '@chakra-ui/core';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';

export default function UseLayout({ children }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <NextSeo
        title="Uses - Opa Kholis Majid"
        description="Thoughts on the programming, tech, and my personal life."
        canonical="https://opakholis.me/uses"
        openGraph={{
          url: 'https://opakholis.me/uses',
          title: 'Uses - Opa Kholis Majid',
          description:
            'Thoughts on the programming, tech, and my personal life.'
        }}
      />

      <Flex
        as="article"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        w="100%"
      >
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          My Setup
        </Heading>
        <Flex mt={2} w="100%">
          <Text mt={2} color={textColor[colorMode]}>
            Here you can find some info, about what I use on everyday basis -
            software, hardware and some personal gear. Heavily inspired by{' '}
            <CustomLink href="https://uses.tech">uses.tech</CustomLink>
          </Text>
        </Flex>
      </Flex>
      {children}
    </Container>
  );
}
