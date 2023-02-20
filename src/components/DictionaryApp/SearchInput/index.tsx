import * as React from "react";
import { Img, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import searchIcon from "../../../images/icon-search.svg";
import { WordContext } from "../../../context";

export function SearchInput() {
  const { setWord } = React.useContext(WordContext);
  const [inputWord, setInputWord] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setInputWord(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setWord(inputWord);
    }
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
        onKeyDown={handleKeyDown}
      />
      <InputRightElement h="64px">
        <Img
          src={searchIcon}
          alt="Search"
          onClick={() => {
            setWord(inputWord);
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
}
