import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { WordPage } from "./WordPage";
import { SearchInput } from "./SearchInput";
import { WordContext } from "../../context";

export function DictionaryApp() {
  const { word } = React.useContext(WordContext);

  return (
    <Box w="737px">
      <NavBar />
      <SearchInput />
      {word.length < 1 ? <Text>Loading</Text> : <WordPage />}
    </Box>
  );
}
