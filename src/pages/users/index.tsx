import React from "react";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { RiAddLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              colorScheme="pink"
              size="sm"
              fontSize="sm"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6"><Checkbox colorScheme="pink" /></Td>
                <Td direction="column">
                  <Box>
                    <Text fontWeight="bold">Rafael Campos</Text>
                    <Text fontSize="sm" color="gray.300">rafaelscampos15@gmail.com</Text>
                  </Box>
                </Td>
                <Td>06 de Julho, 2021 </Td>
              </Tr>
              <Tr>
                <Td px="6"><Checkbox colorScheme="pink" /></Td>
                <Td direction="column">
                  <Box>
                    <Text fontWeight="bold">Rafael Campos</Text>
                    <Text fontSize="sm" color="gray.300">rafaelscampos15@gmail.com</Text>
                  </Box>
                </Td>
                <Td>06 de Julho, 2021 </Td>
              </Tr>
              <Tr>
                <Td px="6"><Checkbox colorScheme="pink" /></Td>
                <Td direction="column">
                  <Box>
                    <Text fontWeight="bold">Rafael Campos</Text>
                    <Text fontSize="sm" color="gray.300">rafaelscampos15@gmail.com</Text>
                  </Box>
                </Td>
                <Td>06 de Julho, 2021 </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}