import Link from 'next/link';
import {
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

  return (
    <VStack as="footer" mb={5} mt={2} spacing={0}>
      <Divider orientation="horizontal" my={8} />
      <NowPlaying />
      <HStack spacing={1}>
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
          href="mailto:hi@opakholis.me"
          ariaLabel="Email"
          icon={<MailIcon boxSize={5} />}
        />
      </HStack>

      <HStack spacing={3} color={secondaryText}>
        <Link href="/uses">
          <a>/uses</a>
        </Link>
        <Link href="/now">
          <a>/now</a>
        </Link>
        <Link href="/advice">
          <a>/advice</a>
        </Link>
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
