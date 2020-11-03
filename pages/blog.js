import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

import { frontMatter as blogPosts } from './blog/**/*.mdx';

const url = 'https://opakholis.me/blog';
const title = 'Blog - Opa Kholis Majid';
const description = 'Thoughts on the programming, tech, and my personal life.';

const Blog = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
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
            Blog
          </Heading>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            Halaman ini berisi tulisan yang juga merupakan sebagai dokumentasi
            untuk saya pribadi ketika sedang belajar atau membagikan sesuatu.
            Enjoy your reading!
          </Text>
          <InputGroup my={4} mr={4} w="100%">
            <Input
              aria-label="Cari tulisan"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Cari tulisan.."
            />
            <InputRightElement>
              <Icon name="search" color="gray.300" />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={4}
        >
          {!filteredBlogPosts.length && 'Artikel tidak ditemukan.'}
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default Blog;
