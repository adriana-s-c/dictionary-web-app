import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { DictionaryDefitinitionContext } from "../../../../context";
import { PlayWordSound } from "./PlayWordSound";

export function Heading() {
  const { dictionaryDefinition } = React.useContext(
    DictionaryDefitinitionContext
  );

  return (
    <Box
      display="flex"
      flexDir="row"
      w={{
        base: "400px",
        sm: "500px",
        lg: "737px",
      }}
      h="114px"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="40px"
    >
      <Box display="flex" flexDir="column">
        <Text
          color="2D2D2D"
          fontSize="64px"
          fontWeight="700"
          textShadow="0px 4px 4px #00000040"
        >
          {dictionaryDefinition[0].word}
        </Text>
        <Text fontSize="24px" color="#A445ED">
          {dictionaryDefinition[0].phonetics.length < 1
            ? null
            : dictionaryDefinition[0].phonetics[0].text}
        </Text>
      </Box>
      <PlayWordSound />
    </Box>
  );
}
