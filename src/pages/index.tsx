import React from 'react'
import { Input } from '../components/Form/Input'
import { Button, Flex, Stack } from '@chakra-ui/react'

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        direction="column"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>

        <Button
          type="submit"
          size="lg"
          mt="6"
          colorScheme="pink"
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
