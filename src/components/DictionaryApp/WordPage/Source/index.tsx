import * as React from "react";
import { Box, Text, Img, Link } from "@chakra-ui/react";
import newWindowcIcon from "../../../../images/icon-new-window.svg";

export function Source() {
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
        href="https://en.wiktionary.org/wiki/keyboard"
        isExternal
        display="flex"
        flexDirection="row"
        fontSize="14px"
        fontWeight="400px"
        color="#2D2D2D"
        textDecorationLine="underline"
        textUnderlineOffset="3px"
        textDecorationThickness="0"
      >
        https://en.wiktionary.org/wiki/keyboard
        <Img src={newWindowcIcon} alt="New window" marginLeft="9px" />
      </Link>
    </Box>
  );
}
