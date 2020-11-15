import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Box
} from '@chakra-ui/react';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

import { frontMatter as blogPosts } from './blog/**/*.mdx';

const url = 'https://opakholis.me/blog';
const title = 'Blog - Opa Kholis Majid';
const description = 'Thoughts on the programming, tech, and my personal life.';

const Blog = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);

  const { colorMode } = useColorMode();

  const primaryTextColor = {
    light: 'black',
    dark: 'white'
  };

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const iconColor = {
    light: 'gray.400',
    dark: 'gray.600'
  };

  const topicsBg = {
    light: 'gray.100',
    dark: 'rgba(255,255,255,0.08)'
  };

  const topicsBgActive = {
    light: '#ceedff',
    dark: '#3a6aa8'
  };

  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter(
      (frontMatter) =>
        selectedTopics.indexOf(frontMatter.category) !== -1 ||
        selectedTopics.length < 1
    )
    .filter(
      (frontMatter) =>
        frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        frontMatter.summary.toLowerCase().includes(searchValue.toLowerCase())
    );

  const topics = [...new Set(blogPosts.map((post) => post.category))];

  const toggleSelectedTopics = (topic) => {
    const topicIndex = selectedTopics.indexOf(topic);
    topicIndex === -1
      ? selectedTopics.push(topic)
      : selectedTopics.splice(topicIndex, 1);
    setSelectedTopics([...selectedTopics]);
  };

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
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="flex-start"
            alignItems="flex-start"
            mr={2}
            w="100%"
          >
            {topics.map((topic, i) => {
              let bgColor =
                selectedTopics.indexOf(topic) === -1
                  ? topicsBg[colorMode]
                  : topicsBgActive[colorMode];
              return (
                <Box
                  key={topic}
                  as="button"
                  p={2}
                  m={1}
                  rounded="md"
                  fontSize="sm"
                  bg={bgColor}
                  color={primaryTextColor[colorMode]}
                  _hover={{ bg: topicsBgActive[colorMode] }}
                  _active={{ bg: topicsBgActive[colorMode] }}
                  _selected={{ g: topicsBgActive[colorMode] }}
                  onClick={() => toggleSelectedTopics(topic)}
                >
                  {topic}
                </Box>
              );
            })}
          </Flex>
          <InputGroup mt={4} width="100%">
            <Input
              variant="filled"
              aria-label="Cari tulisan"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Cari tulisan.."
            />
            <InputRightElement>
              <Icon as={FiSearch} color={iconColor[colorMode]} />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
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
