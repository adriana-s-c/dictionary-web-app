import * as React from "react";
import {
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Box,
} from "@chakra-ui/react";
import searchIcon from "../../../images/icon-search.svg";
import { WordContext } from "../../../context";

export function SearchInput() {
  const { word, setWord } = React.useContext(WordContext);
  const [inputWord, setInputWord] = React.useState("");
  const [inputError, setInputError] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputWord.length > 0) {
      setInputError(false);
    }
    return setInputWord(event.target.value);
  };

  const handleSearchClick = () => {
    if (inputWord.length === 0) {
      setInputError(true);
      setWord(inputWord);
    }
    setWord(inputWord);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      if (inputWord.length === 0) {
        setInputError(true);
      }
      setWord(inputWord);
    }
  };

  return (
    <Box marginBottom="52px">
      <InputGroup>
        <Input
          bgColor="#F4F4F4"
          borderColor="#F4F4F4"
          focusBorderColor={inputError === true ? "#FF5252" : "#A445ED"}
          errorBorderColor="#FF5252"
          fontSize="20px"
          fontWeight="700"
          h="64px"
          borderRadius="16px"
          w="736px"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          isInvalid={inputError}
          _placeholder={{
            color: "#2D2D2D",
            opacity: "25%",
            fontSize: "20px",
            fontWeight: "700",
          }}
          placeholder="Search for any word…"
        />
        <InputRightElement h="64px">
          <Img src={searchIcon} alt="Search" onClick={handleSearchClick} />
        </InputRightElement>
      </InputGroup>
      {inputError === true ? (
        <Text color="#FF5252" fontWeight="400" fontSize="20px" marginTop="8px">
          Whoops, can’t be empty…
        </Text>
      ) : null}
    </Box>
  );
}
