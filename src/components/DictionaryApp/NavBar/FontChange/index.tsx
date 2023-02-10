import * as React from "react";
import {
  Box,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Img,
} from "@chakra-ui/react";
import arrowDown from "../../../../images/icon-arrow-down.svg";

// zdefiniować w custom theme by nie bylo tego szarego poswietlenia i w ogole zrobić jaknajwiecej w tym theme by tutaj było jak najmniej

export function FontChange() {
  return (
    <Box w="120px" h="24px">
      <Menu>
        <MenuButton>
          <Box display="flex" flexDir="row" w="100%">
            Sans Serif <Img src={arrowDown} alt="Arrow down" marginLeft="8px" />
          </Box>
        </MenuButton>
        <MenuList paddingBlock="30px" paddingLeft="30px">
          <Box
            w="90px"
            h="104px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <MenuItem fontFamily="Inter">Sans Serif</MenuItem>
            <MenuItem fontFamily="Lora">Serif</MenuItem>
            <MenuItem fontFamily="Inconsolata">Mono</MenuItem>
          </Box>
        </MenuList>
      </Menu>
    </Box>
  );
}
