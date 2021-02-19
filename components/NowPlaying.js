import useSWR from 'swr';
import {
  Box,
  Link,
  Text,
  Image,
  Stack,
  Skeleton,
  useColorModeValue
} from '@chakra-ui/react';

import fetcher from '@/lib/fetcher';
import { SpotifyIcon } from '@/styles/icons';

const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        border="1px solid"
        borderRadius={8}
        borderColor={borderColor}
        p={2}
        w="320px"
      >
        <Skeleton isLoaded={data}>
          <Image
            alt="Spotify"
            height="60px"
            width="60px"
            borderRadius={6}
            src={data?.albumImageUrl || '/static/images/placeholder.jpg'}
          />
        </Skeleton>
        <Stack
          spacing={0}
          justifyContent="center"
          alignItems="flex-start"
          display="flex"
          flexDirection="column"
          ml={4}
        >
          <Link
            fontWeight="medium"
            maxWidth="190px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            href={data?.songUrl}
            isExternal
          >
            {data && (data?.title || 'Not Playing')}
          </Link>
          <Text
            color="gray.500"
            maxWidth="190px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {data && (data?.artist || 'Spotify')}
          </Text>
        </Stack>
        <SpotifyIcon ml="auto" mt={1} />
      </Box>
    </Box>
  );
};
export default NowPlaying;
