import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Button,
  Divider,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import Footer from './Footer';
import NowPlaying from './NowPlaying';

export default function Container({ children }) {
  const { pathname } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundNavbar = useColorModeValue('white', 'gray.900');

  return (
    <>
      <Box h="6px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
      <Flex
        as="nav"
        pos="sticky"
        top="0"
        zIndex="9"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="780px"
        width="100%"
        bg={backgroundNavbar}
        p={8}
        mx="auto"
        my={[0, 8]}
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
        <Box>
          <Link href="/">
            <Button
              as="a"
              cursor="pointer"
              variant={pathname === '/' ? 'solid' : 'ghost'}
              px={[4, 5]}
              mr={1}
            >
              Home
            </Button>
          </Link>

          <Link href="/about">
            <Button
              as="a"
              cursor="pointer"
              variant={pathname.startsWith('/about') ? 'solid' : 'ghost'}
              px={[4, 5]}
              mr={1}
            >
              About
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              as="a"
              cursor="pointer"
              variant={pathname.startsWith('/blog') ? 'solid' : 'ghost'}
              px={[4, 5]}
            >
              Blog
            </Button>
          </Link>
        </Box>
      </Flex>
      <Box as="main" maxW="768px" w="100%" px={8} mx="auto">
        {children}
        <Divider orientation="horizontal" my={8} />
        <NowPlaying />
      </Box>
      <Footer />
    </>
  );
}
