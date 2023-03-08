import * as React from "react";
import { Box, Text, Img, Link, useColorModeValue } from "@chakra-ui/react";
import newWindowcIcon from "../../../../images/icon-new-window.svg";
import { useDictionaryDefinition } from "../../../../hooks/useDictionaryDefinition";

export function Source() {
  const dictionaryDefinition = useDictionaryDefinition();

  return (
    <Box marginTop="20px" display="flex" flexDir="row" h="17px">
      <Text
        fontSize="14px"
        fontWeight="400px"
        color="#757575"
        marginRight="20px"
        textDecorationLine="underline"
        textUnderlineOffset="3px"
        textDecorationThickness="0"
      >
        Source
      </Text>
      <Link
        href={dictionaryDefinition.entries[0].sourceUrls[0]}
        isExternal
        display="flex"
        flexDirection="row"
        fontSize="14px"
        fontWeight="400px"
        color={useColorModeValue("#2D2D2D", "#FFFFFF")}
        textDecorationLine="underline"
        textUnderlineOffset="3px"
        textDecorationThickness="0"
      >
        {dictionaryDefinition.entries[0].sourceUrls[0]}
        <Img src={newWindowcIcon} alt="New window" marginLeft="9px" />
      </Link>
    </Box>
  );
}
