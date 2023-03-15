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
import { useWord } from "../../../hooks/useWord";

export function Search() {
  const { word, setWord } = useWord();
  const [inputWord, setInputWord] = React.useState<string>(word ?? "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(event.target.value);
  };

  const inputHasError = word === "";

  const handleSearchClick = () => {
    setWord(inputWord);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
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
          focusBorderColor={inputHasError ? "#FF5252" : "#A445ED"}
          errorBorderColor="#FF5252"
          fontSize="20px"
          fontWeight="700"
          h="64px"
          borderRadius="16px"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          isInvalid={inputHasError}
          _placeholder={{
            color: useColorModeValue("#2D2D2D", "white"),
            opacity: "25%",
            fontSize: "20px",
            fontWeight: "700",
          }}
          placeholder="Search for any word…"
          inputMode="search"
          value={inputWord}
        />

        <InputRightElement h="64px">
          <Img src={searchIcon} alt="Search" onClick={handleSearchClick} />
        </InputRightElement>
      </InputGroup>
      {inputHasError ? (
        <Text color="#FF5252" fontWeight="400" fontSize="20px" marginTop="8px">
          Whoops, can’t be empty…
        </Text>
      ) : null}
    </Box>
  );
}
