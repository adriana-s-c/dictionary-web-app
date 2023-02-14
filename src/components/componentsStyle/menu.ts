import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    transition: "all 0.2s",
    borderRadius: "16px",
    borderWidt: "1px",
    borderColor: "white",
    fontSize: "18px",
    fontWeight: "700",
  },
  list: {
    borderRadius: "16px",
    borderColor: "white",
    shadow: "md",
  },
  item: {
    _hover: { color: "#A445ED", bgColor: "white" },
    fontSize: "18px",
    fontWeight: "700",
    bgColor: "white",
    padding: "0px",
  },
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
