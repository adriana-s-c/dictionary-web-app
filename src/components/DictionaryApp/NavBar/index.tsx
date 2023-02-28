import * as React from "react";
import { Box, Divider, useColorModeValue } from "@chakra-ui/react";
import { FontChange } from "./FontChange";
import { Logo } from "./Logo";
import { ModeChange } from "./ModeChange";

export function NavBar() {
  return (
    <Box
      display="flex"
      flexDir="row"
      h="36.5px"
      w={{
        base: "400px",
        sm: "500px",
        lg: "737px",
      }}
      marginBottom="50px"
    >
      <Logo />
      <Box
        display="flex"
        flexDir="row"
        w="100%"
        h="36.5px"
        justifyContent="flex-end"
        alignItems="center"
      >
        <FontChange />
        <Divider
          orientation="vertical"
          h="32px"
          bgColor={useColorModeValue("#979797", "#E9E9E9")}
        />
        <ModeChange />
      </Box>
    </Box>
  );
}
