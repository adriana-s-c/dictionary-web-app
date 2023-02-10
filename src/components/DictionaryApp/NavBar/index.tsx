import * as React from "react";
import { Box, Divider } from "@chakra-ui/react";
import { FontChange } from "./FontChange";
import { Logo } from "./Logo";
import { ModeChange } from "./ModeChange";

export function NavBar() {
  return (
    <Box
      display="flex"
      flexDir="row"
      h="36.5px"
      w="736.99px"
      marginBottom="50px"
    >
      <Logo />
      <Box display="flex" flexDir="row" w="100%" justifyContent="flex-end">
        <FontChange />
        <Divider orientation="vertical" />
        <ModeChange />
      </Box>
    </Box>
  );
}
