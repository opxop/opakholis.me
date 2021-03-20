import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast
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
      <Heading fontSize="2xl">Bergabung</Heading>
      <Text my={2}>
        Tidak hanya untuk opa, pesan Kamu juga akan terlihat oleh pengunjung
        lain.
      </Text>

      {auth.user ? (
        <InputGroup
          as="form"
          size="md"
          mt={6}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            name="text"
            type="text"
            variant="filled"
            placeholder="Tulisan Pesanmu..."
            ref={register({ required: true })}
            isRequired
          />
          <InputRightElement mr={1} w="5rem">
            <Button h="2rem" w="12rem" type="submit">
              Kirim
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <Flex alignItems="center" flexDirection={['column', 'row']}>
          <Button
            m={2}
            onClick={(e) => auth.signinWithGithub()}
            fontWeight="medium"
          >
            <GithubIcon mr={2} />
            Login dengan Github
          </Button>
          <Divider orientation="vertical" />
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
