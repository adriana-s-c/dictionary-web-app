import * as React from "react";
import { Img, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import searchIcon from "../../../images/icon-search.svg";
import { WordContext } from "../../../context";

export function SearchInput() {
  const { word, setWord } = React.useContext(WordContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      return setWord(event.target.value);
    }, 2000);
  };

  return (
    <InputGroup marginBottom="50px">
      <Input
        bgColor="#F4F4F4"
        borderColor="#F4F4F 4"
        focusBorderColor="#A445ED"
        fontSize="20px"
        fontWeight="700"
        h="64px"
        borderRadius="16px"
        w="736px"
        onChange={handleChange}
      />
      <InputRightElement pointerEvents="none" h="64px">
        <Img src={searchIcon} alt="Search" />
      </InputRightElement>
    </InputGroup>
  );
}
