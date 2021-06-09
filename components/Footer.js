import NextLink from 'next/link';
import {
  Link,
  VStack,
  HStack,
  Divider,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';

import { MailIcon, GithubIcon, TwitterIcon } from '@/styles/icons';

import NowPlaying from './NowPlaying';

export default function Footer() {
  const secondaryText = useColorModeValue('gray.700', 'gray.400');
  const hoverText = useColorModeValue('black', 'white');

  return (
    <VStack as="footer" spacing={0} maxW="768px" w="100%" px={8} mx="auto">
      <Divider orientation="horizontal" my={8} />
      <NowPlaying />
      <HStack spacing={2} pt={3}>
        <Icon
          href="https://twitter.com/opakholis"
          ariaLabel="Twitter"
          icon={<TwitterIcon boxSize={5} />}
        />
        <Icon
          href="https://github.com/opxop"
          ariaLabel="Github"
          icon={<GithubIcon boxSize={5} />}
        />
        <Icon
          href="mailto:hi@opakholis.dev"
          ariaLabel="Email"
          icon={<MailIcon boxSize={5} />}
        />
      </HStack>

      <HStack spacing={5} color={secondaryText} pb={5}>
        <NextLink href="/uses">
          <Link _hover={{ color: hoverText }}>/uses</Link>
        </NextLink>
        <NextLink href="/advices">
          <Link _hover={{ color: hoverText }}>/advices</Link>
        </NextLink>
        <NextLink href="/now">
          <Link _hover={{ color: hoverText }}>/now</Link>
        </NextLink>
      </HStack>
    </VStack>
  );
}

const Icon = ({ href, ariaLabel, icon }) => {
  return (
    <IconButton
      as="a"
      href={href}
      icon={icon}
      aria-label={ariaLabel}
      size="lg"
      variant="ghost"
      color="gray.500"
      target="_blank"
      rel="noreferrer noopener"
    />
  );
};
