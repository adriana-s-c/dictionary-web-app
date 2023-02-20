import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { WordPage } from "./WordPage";
import { SearchInput } from "./SearchInput";
import { DictionaryDefitinitionContext, WordContext } from "../../context";
import { ErrorPage } from "./ErrorPage";

export function DictionaryApp() {
  const { dictionaryDefinition } = React.useContext(
    DictionaryDefitinitionContext
  );
  const { word } = React.useContext(WordContext);

  function contentRender() {
    if (word.replace(/\s/g, "") === "") {
      return null;
    }
    if (dictionaryDefinition.length > 0) {
      return <WordPage />;
    }
    if (dictionaryDefinition.title === "No Definitions Found") {
      return <ErrorPage />;
    }
    <Text>Loading</Text>;
  }

  return (
    <Box w="737px">
      <NavBar />
      <SearchInput />
      {contentRender()}
    </Box>
  );
}
