import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Definition } from "./Definition";
import { Heading } from "./Heading";
import { Source } from "./Source";

export function WordPage() {
  return (
    <Box>
      <Heading />
      <Definition />
      <Source />
    </Box>
  );
}
