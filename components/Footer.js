import React from 'react';
import { Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { FiGithub, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi';

const Footer = () => (
  <Flex align="center" my={4} direction="column">
    <div>
      <Link
        href="https://twitter.com/opakholis"
        title="Twitter"
        _focus={{ boxShadow: 'none' }}
        isExternal
      >
        <IconButton
          as={FiTwitter}
          aria-label="Twitter"
          size="md"
          p="0.7em"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://github.com/opxop"
        title="Github"
        _focus={{ boxShadow: 'none' }}
        isExternal
      >
        <IconButton
          as={FiGithub}
          aria-label="Github"
          size="md"
          p="0.7em"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.facebook.com/opakholis"
        title="Facebook"
        _focus={{ boxShadow: 'none' }}
        isExternal
      >
        <IconButton
          as={FiFacebook}
          aria-label="Facebook"
          size="md"
          p="0.7em"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="mailto:hello@opakholis.me"
        title="Email"
        _focus={{ boxShadow: 'none' }}
        isExternal
      >
        <IconButton
          as={FiMail}
          aria-label="Email"
          size="md"
          p="0.7em"
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
