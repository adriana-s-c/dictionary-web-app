import * as React from "react";
import { Img, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import searchIcon from "../../../images/icon-search.svg";

export function SearchInput() {
  return (
    <InputGroup>
      <Input
        bgColor="#F4F4F4"
        borderColor="#F4F4F4"
        focusBorderColor="#A445ED"
        fontSize="20px"
        fontWeight="700"
        h="64px"
        borderRadius="16px"
        w="736px"
      />
      <InputRightElement pointerEvents="none" h="64px">
        <Img src={searchIcon} alt="Search" />
      </InputRightElement>
    </InputGroup>
  );
}
