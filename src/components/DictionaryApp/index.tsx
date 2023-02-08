import * as React from "react";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { WordPage } from "./WordPage";

export function DictionaryApp() {
  return (
    <Box>
      <NavBar />
      <WordPage />
    </Box>
  );
}
