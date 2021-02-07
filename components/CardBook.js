// import Image from 'next/Image';
import { Box, Image, Link, useColorModeValue } from '@chakra-ui/react';

const CardBook = ({ image, title, href }) => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  return (
    <Link href={href} title={title} isExternal>
      <Box
        maxW={225}
        borderRadius="sm"
        shadow="xl"
        bg={bg}
        p={6}
        transition="transform .5s ease-in-out"
        _hover={{ transform: 'rotate(3deg)' }}
      >
        <Image src={image} alt={title} shadow="md" borderRadius="sm" />
      </Box>
    </Link>
  );
};

export default CardBook;
