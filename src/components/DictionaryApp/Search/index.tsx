import * as React from "react";
import {
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import searchIcon from "../../../images/icon-search.svg";
import { WordContext } from "../../../context";

export function Search() {
  const { setWord } = React.useContext(WordContext);
  const [inputWord, setInputWord] = React.useState("");
  const [inputError, setInputError] = React.useState(false);

  const inputHasError = !inputWord;

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
    <Box
      marginBottom="52px"
      w={{
        base: "360px",
        xs: "400px",
        sm: "500px",
        lg: "737px",
      }}
    >
      <InputGroup>
        <Input
          bgColor={useColorModeValue("#F4F4F4", "#1F1F1F")}
          borderColor={useColorModeValue("#F4F4F4", "#050505")}
          focusBorderColor={inputError === true ? "#FF5252" : "#A445ED"}
          errorBorderColor="#FF5252"
          fontSize="20px"
          fontWeight="700"
          h="64px"
          borderRadius="16px"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          isInvalid={inputError}
          _placeholder={{
            color: useColorModeValue("#2D2D2D", "white"),
            opacity: "25%",
            fontSize: "20px",
            fontWeight: "700",
          }}
          placeholder="Search for any word…"
          inputMode="search"
        />
        <InputRightElement h="64px">
          <Img src={searchIcon} alt="Search" onClick={handleSearchClick} />
        </InputRightElement>
      </InputGroup>
      {inputError ? (
        <Text color="#FF5252" fontWeight="400" fontSize="20px" marginTop="8px">
          Whoops, can’t be empty…
        </Text>
      ) : null}
    </Box>
  );
}
