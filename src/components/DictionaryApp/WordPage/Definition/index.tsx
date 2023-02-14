import * as React from "react";
import { Box } from "@chakra-ui/react";
import { WordTypedHeading } from "./WordTypeHeading";
import { WordMeaning } from "./WordMeaning";
import { WordSynonyms } from "./WordSynonyms";

export function Definition() {
  return (
    <Box>
      <WordTypedHeading />
      <WordMeaning />
      <WordSynonyms />
    </Box>
  );
}
