import { Box, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';

export default function AdviceMessage({ advices }) {
  return (
    <div>
      {advices.map((advice) => (
        <Box key={advice.createdAt} py={2}>
          <Text my={1}>{advice.text}</Text>
          <Text fontSize="small" color="gray.400">
            {format(parseISO(advice.createdAt), 'PP • p')}
          </Text>
        </Box>
      ))}
    </div>
  );
}
