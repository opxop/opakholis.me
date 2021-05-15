import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import {
  Text,
  Input,
  Stack,
  Button,
  Heading,
  useToast,
  InputGroup,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react';

import { useAuth } from '@/lib/firebase/auth';
import { createAdvice } from '@/lib/firebase/db';

import { GithubIcon, GoogleIcon } from '@/styles/icons';

export default function AdviceForm() {
  const auth = useAuth();
  const toast = useToast();

  const bgCard = useColorModeValue('gray.50', 'blackAlpha.50');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

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
    <Stack
      p={6}
      my={6}
      bgColor={bgCard}
      borderWidth="2px"
      rounded="md"
      spacing={4}
    >
      <Heading fontSize="2xl">👏 Surprise me!</Heading>
      <Text my={2}>Tinggalkan pesan apa saja yang menurut kamu pantas.</Text>
      {auth.user ? (
        <>
          <InputGroup as="form" mt={4} onSubmit={handleSubmit(onSubmit)}>
            <Input
              pr="4.6rem"
              variant="filled"
              placeholder="Tulisan Pesanmu..."
              {...register('text', { required: true })}
            />
            <InputRightElement w="4.5rem">
              <Button h="1.75rem" size="sm" type="submit" colorScheme="twitter">
                Kirim
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.text && (
            <Text color="red.500" fontSize="sm">
              Hey! kamu belum menuliskan pesan apapun.
            </Text>
          )}
        </>
      ) : (
        <Stack justifyContent="start" direction={['column', 'row']} spacing={4}>
          <Button onClick={() => auth.signinWithGithub()} fontWeight="normal">
            <GithubIcon mr={2} />
            Login dengan Github
          </Button>
          <Button onClick={() => auth.signinWithGoogle()} fontWeight="normal">
            <GoogleIcon mr={2} />
            Login dengan Google
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
