import { mutate } from 'swr';
import { format, parseISO } from 'date-fns';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

import { useAuth } from '@/lib/firebase/auth';
import { deleteAdvice } from '@/lib/firebase/db';
import { Trash } from '@/styles/icons';

export function ButtonAdvice({ id }) {
  const onDelete = () => {
    deleteAdvice(id);
    mutate(
      '/api/advices',
      async (data) => {
        return {
          advices: data.advices.filter((advice) => advice.id !== id)
        };
      },
      false
    );
  };

  return (
    <IconButton
      size="sm"
      aria-label="Delete advice"
      onClick={onDelete}
      icon={<Trash boxSize={4} />}
    />
  );
}

export default function AdviceMessage({ advices }) {
  const auth = useAuth();

  const orderedAdvices = advices.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div>
      {orderedAdvices.map((advice, i) => (
        <Box key={i} py={2}>
          <Flex justify="space-between" alignItems="center">
            <Text my={1}>{advice.text}</Text>
            {auth.user?.uid == advice.authorId && (
              <ButtonAdvice id={advice.id} />
            )}
          </Flex>
          <Text fontSize="small" color="gray.400">
            {format(parseISO(advice.createdAt), 'PP • p')}
          </Text>
        </Box>
      ))}
    </div>
  );
}
