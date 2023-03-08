import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { PlayWordSound } from "./PlayWordSound";
import { useDictionaryDefinition } from "../../../../hooks/useDictionaryDefinition";

export function Heading() {
  const dictionaryDefinition = useDictionaryDefinition();

  return (
    <Box
      display="flex"
      flexDir="row"
      w={{
        base: "360px",
        xs: "400px",
        sm: "500px",
        lg: "737px",
      }}
      h="114px"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="40px"
    >
      <Box
        display="flex"
        flexDir="column"
        w={{
          base: "275px",
          xs: "315px",
          sm: "415px",
          lg: "652px",
        }}
      >
        <Text
          color="2D2D2D"
          fontSize={
            dictionaryDefinition.entries[0].word.length > 10
              ? { base: "30px", sm: "44px" }
              : { base: "50px", sm: "64px" }
          }
          fontWeight="700"
          textShadow="0px 4px 4px #00000040"
        >
          {dictionaryDefinition.entries[0].word}
        </Text>
        <Text
          fontSize={
            dictionaryDefinition.entries[0].word.length > 10
              ? { base: "18px", sm: "24px" }
              : { base: "24px", sm: "24px" }
          }
          color="#A445ED"
        >
          {dictionaryDefinition.entries[0].phonetics.length < 1
            ? null
            : dictionaryDefinition.entries[0].phonetics[0].text}
        </Text>
      </Box>
      {dictionaryDefinition.entries[0].phonetics.length < 1 ? null : (
        <PlayWordSound />
      )}
    </Box>
  );
}
