import * as React from "react";
import { Box, Img, Switch } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import moonIcon from "../../../../images/icon-moon.svg";

export function ModeChange() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display="flex" flexDir="row" w="79.99px" h="24px" marginLeft="20px">
      <Switch onClick={toggleColorMode} size="md" />
      <Img alt="Mode Change" src={moonIcon} marginLeft="20px" />
    </Box>
  );
}
