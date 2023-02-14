import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle(() => ({
  container: {},
  item: {
    "&::marker": {
      color: "#8F19E8",
    },
  },
  icon: {
    color: mode("blue.500", "blue.200"),
  },
}));

export const listTheme = defineMultiStyleConfig({ baseStyle });
