import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';

import {
  MailIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon
} from '@/styles/icons';

const Footer = () => {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  return (
    <Box as="footer" mb={5} mt={2}>
      <Flex justifyContent="center" alignItems="center">
        <Link href="https://twitter.com/opakholis" isExternal>
          <IconButton
            aria-label="Github"
            icon={<TwitterIcon boxSize={5} />}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href="https://github.com/opxop" isExternal>
          <IconButton
            aria-label="Github"
            icon={<GithubIcon boxSize={5} />}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/opakholis" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={<LinkedinIcon boxSize={5} />}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href="mailto:hi@opakholis.me" isExternal>
          <IconButton
            aria-label="Email"
            icon={<MailIcon boxSize={5} />}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
      </Flex>

      <Flex justifyContent="center" alignItems="center">
        <Link mx={2} color={secondaryText} href="/uses">
          /uses
        </Link>
        <Link mx={2} color={secondaryText} href="/now">
          /now
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
