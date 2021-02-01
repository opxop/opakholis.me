import { NextSeo } from 'next-seo';
import { Heading, Flex, Text, useColorMode, Box } from '@chakra-ui/react';

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
        title="Now - Opa Kholis Majid"
        description="What i am doing now."
        canonical="https://opakholis.me/now"
        openGraph={{
          url: 'https://opakholis.me/now',
          title: 'Now - Opa Kholis Majid',
          description: 'What i am doing now.'
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
          NowNowNow
        </Heading>
        <Flex mt={2} w="100%">
          <Text mt={2} color={textColor[colorMode]}>
            This page is inspired by&nbsp;
            <CustomLink href="https://sivers.org/">Derek Sivers</CustomLink> and
            listed on&nbsp;
            <CustomLink href="https://nownownow.com/about">now page</CustomLink>
            , here’s what I’m up to these days. &nbsp;
          </Text>
        </Flex>
      </Flex>
      {children}
    </Container>
  );
}
