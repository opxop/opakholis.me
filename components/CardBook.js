import { Box, Image, Link, useColorModeValue } from '@chakra-ui/react';

const CardBook = ({ image, title, href }) => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  return (
    <Link href={href} title={title} isExternal>
      <Box
        m={3}
        borderRadius="sm"
        shadow="xl"
        bg={bg}
        p={5}
        transition="transform .5s ease-in-out"
        _hover={{ transform: 'rotate(3deg)' }}
      >
        <Image
          h="200px"
          w="132px"
          objectFit="cover"
          src={image}
          alt={title}
          shadow="md"
          borderRadius="sm"
          fallbackSrc={image}
        />
      </Box>
    </Link>
  );
};

export default CardBook;
