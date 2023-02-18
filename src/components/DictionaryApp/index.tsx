import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { WordPage } from "./WordPage";
import { SearchInput } from "./SearchInput";
import { DictionaryDefitinitionContext } from "../../context";

export function DictionaryApp() {
  const { dictionaryDefinition } = React.useContext(
    DictionaryDefitinitionContext
  );
  return (
    <Box w="737px">
      <NavBar />
      <SearchInput />
      {dictionaryDefinition.length < 1 ? <Text>Loading</Text> : <WordPage />}
    </Box>
  );
}
