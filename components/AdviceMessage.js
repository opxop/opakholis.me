import { Box, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';

export default function AdviceMessage({ advices }) {
  const orderedAdvices = advices.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div>
      {orderedAdvices.map((advice, i) => (
        <Box key={i} py={2}>
          <Text my={1}>{advice.text}</Text>
          <Text fontSize="small" color="gray.400">
            {format(parseISO(advice.createdAt), 'PP • p')}
          </Text>
        </Box>
      ))}
    </div>
  );
}
