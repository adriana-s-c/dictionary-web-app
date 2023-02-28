import * as React from "react";
import { Box, Icon, Switch, useColorModeValue } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export function ModeChange() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display="flex" flexDir="row" w="79.99px" h="24px" marginLeft="20px">
      <Switch
        onChange={toggleColorMode}
        size="md"
        isChecked={colorMode === "dark"}
      />
      <Icon viewBox="0 0 22 22" width="22" height="22" marginLeft="20px">
        <path
          fill="none"
          stroke={useColorModeValue("#838383", "#A445ED")}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </Icon>
    </Box>
  );
}
