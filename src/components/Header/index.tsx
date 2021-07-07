import React from "react";
import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { NotificationsBox } from "./NotificationsBox";
import { Profile } from "./Profile";


export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      px="6"
      mt="4"
      align="center"
    >
      <Logo /> 
      <SearchBox />
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsBox />
        <Profile />
      </Flex>
    </Flex>
  )
}