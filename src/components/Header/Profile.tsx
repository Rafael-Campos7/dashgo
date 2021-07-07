import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center" >
      <Box mr="4" textAlign="right">
        <Text>Rafael Campos</Text>
        <Text color="gray.300" fontSize="small">
          rafaelscampos15@gmail.com
        </Text>
      </Box>
      <Avatar size="md" src="https://github.com/Rafael-Campos7.png" />
    </Flex>
  )
}