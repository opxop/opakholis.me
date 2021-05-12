import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Heading,
  useToast,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';

import { useAuth } from '@/lib/firebase/auth';
import { createAdvice } from '@/lib/firebase/db';

import { GithubIcon, GoogleIcon } from '@/styles/icons';

export default function AdviceForm() {
  const auth = useAuth();
  const toast = useToast();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ text }) => {
    const newAdvice = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      text
    };

    createAdvice(newAdvice);
    toast({
      title: 'Hoorayyy.',
      description: 'Pesanmu berhasil ditambahkan.',
      status: 'success',
      duration: 2000
    });
    reset();
    mutate(
      '/api/advices',
      async (data) => {
        return { advices: [...data.advices, newAdvice] };
      },
      false
    );
  };

  return (
    <Box p={6} my={6} bgColor="blackAlpha.50" borderWidth="1px" rounded="md">
      <Heading fontSize="2xl">👏 Surprise me!</Heading>
      <Text my={2}>Tinggalkan pesan apa saja yang menurut kamu pantas.</Text>
      {auth.user ? (
        <InputGroup as="form" mt={4} onSubmit={handleSubmit(onSubmit)}>
          <Input
            isRequired
            variant="filled"
            placeholder="Tulisan Pesanmu..."
            {...register('text')}
          />
          <InputRightElement mr={1} w="5rem">
            <Button h="2rem" w="12rem" type="submit">
              Kirim
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <Flex flexDirection={['column', 'row']} justifyContent="start">
          <Button
            m={2}
            onClick={(e) => auth.signinWithGithub()}
            fontWeight="medium"
          >
            <GithubIcon mr={2} />
            Login dengan Github
          </Button>
          <Button
            m={2}
            onClick={(e) => auth.signinWithGoogle()}
            fontWeight="medium"
          >
            <GoogleIcon mr={2} />
            Login dengan Google
          </Button>
        </Flex>
      )}
    </Box>
  );
}
