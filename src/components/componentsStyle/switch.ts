import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(["container", "track", "thumb"]);

export const switchTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {},
    track: {
      bg: "#757575",
      _checked: {
        bgColor: "#A445ED",
      },
      _hover: {
        bgColor: "#A445ED",
      },
    },
    thumb: {
      bg: "white",
    },
  },
});
