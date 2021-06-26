import Image from 'next/image';
import useSWR from 'swr';
import {
  Box,
  Link,
  Text,
  Stack,
  Skeleton,
  SkeletonText,
  useColorModeValue
} from '@chakra-ui/react';

import fetcher from '@/lib/fetcher';
import { Spotify } from '@/styles/icons';

export default function NowPlaying() {
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
        w="300px"
      >
        <Skeleton isLoaded={data} h="60px" w="60px" rounded={6}>
          <Image
            alt="Spotify"
            height={60}
            width={60}
            objectFit="cover"
            className="next__image"
            src={data?.albumImageUrl || '/static/images/placeholder.jpg'}
          />
        </Skeleton>
        <SkeletonText
          isLoaded={data}
          noOfLines={2}
          spacing={4}
          ml={2}
          w="160px"
        >
          <Stack
            spacing={0}
            justifyContent="center"
            alignItems="flex-start"
            display="flex"
            flexDirection="column"
          >
            <Link
              fontWeight="medium"
              maxWidth="190px"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              href={data?.songUrl ?? 'https://open.spotify.com/'}
              isExternal
            >
              {data && (data?.title ?? 'Not Playing')}
            </Link>
            <Text
              color="gray.500"
              maxWidth="190px"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {data && (data?.artist ?? 'Spotify')}
            </Text>
          </Stack>
        </SkeletonText>
        <Spotify ml="auto" mt={1} />
      </Box>
    </Box>
  );
}
