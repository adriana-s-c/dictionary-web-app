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
import { FontContext } from "../../../../context";

export function FontChange() {
  const { font, setFont } = React.useContext(FontContext);

  function menuHeader() {
    switch (font) {
      case "Inter":
        return " Sans Serif";
      case "Lora":
        return "Serif";
      case "Inconsolata":
        return "Mono";
    }
  }

  return (
    <Box w="120px" h="24px" marginRight="20px" textAlign="right">
      <Menu>
        <MenuButton>
          <Box
            display="flex"
            flexDir="row"
            w="100%"
            fontFamily={font}
            fontWeight="700"
            fontSize="18px"
          >
            {menuHeader()}
            <Img src={arrowDown} alt="Arrow down" marginLeft="8px" />
          </Box>
        </MenuButton>
        <MenuList
          paddingBlock="30px"
          paddingLeft="30px"
          boxShadow="0px 5px 30px 0px #0000001A"
        >
          <Box
            w="90px"
            h="104px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <MenuItem fontFamily="Inter" onClick={() => setFont("Inter")}>
              Sans Serif
            </MenuItem>
            <MenuItem fontFamily="Lora" onClick={() => setFont("Lora")}>
              Serif
            </MenuItem>
            <MenuItem
              fontFamily="Inconsolata"
              onClick={() => setFont("Inconsolata")}
            >
              Mono
            </MenuItem>
          </Box>
        </MenuList>
      </Menu>
    </Box>
  );
}
