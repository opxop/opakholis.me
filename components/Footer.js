import React from 'react';
import { Flex, IconButton, Link, Text } from '@chakra-ui/core';

const Footer = () => (
  <Flex align="center" my={4} direction="column">
    <div>
      <Link href="https://twitter.com/opakholis" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/opxop" title="Github" isExternal>
        <IconButton
          aria-label="Github"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/opakholis"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:hello@opakholis.me" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
    <Text fontSize="sm" color="gray.500" minWidth="100px" mt={2}>
      Built with ❤️ using
      <Link
        href="https://nextjs.org"
        mx={1}
        _focus={{ border: 'none' }}
        isExternal
      >
        NextJS
      </Link>
      &copy; 2020
    </Text>
  </Flex>
);

export default Footer;
