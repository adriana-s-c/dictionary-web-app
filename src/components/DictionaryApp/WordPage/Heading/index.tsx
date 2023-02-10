import * as React from "react";
import { Box, Text, Img } from "@chakra-ui/react";
import playSound from "../../../../images/icon-play.svg";

export function Heading() {
  return (
    <Box
      display="flex"
      flexDir="row"
      w="737px"
      h="114px"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="50px"
    >
      <Box display="flex" flexDir="column">
        <Text
          color="2D2D2D"
          fontSize="64px"
          fontWeight="700"
          textShadow="0px 4px 4px #00000040"
        >
          keyboard
        </Text>
        <Text fontSize="24px" color="#A445ED">
          /ˈkiːbɔːd/
        </Text>
      </Box>
      <Img src={playSound} alt="play" w="75px" h="75px" />
    </Box>
  );
}
