import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    transition: "all 0.2s",

    borderRadius: "16px",
    borderWidt: "1px",
    fontSize: "18px",
    fontWeight: "700",
  },
  list: {
    borderRadius: "16px",
    _light: {
      borderColor: "white",
      shadow: "md",
      boxShadow: "0px 5px 30px 0px, #0000001A",
    },
    _dark: {
      bgColor: "#1F1F1F",
      borderColor: "#1F1F1F",
      boxShadow: "0px 5px 30px 0px #A445ED",
    },
  },
  item: {
    _hover: { color: "#A445ED", bgColor: "white" },
    fontSize: "18px",
    fontWeight: "700",
    bgColor: "white",
    padding: "0px",
    _dark: { bgColor: "#1F1F1F" },
  },
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
