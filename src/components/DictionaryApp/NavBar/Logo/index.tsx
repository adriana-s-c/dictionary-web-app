import { Box, Img } from "@chakra-ui/react";
import * as React from "react";
import appLogo from "../../../../images/logo.svg";

export function Logo() {
  return (
    <Box>
      <Img src={appLogo} alt="logo" />
    </Box>
  );
}
