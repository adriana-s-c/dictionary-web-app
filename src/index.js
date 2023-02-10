import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(["container", "track", "thumb"]);

const Switch = helpers.defineMultiStyleConfig({
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

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const menuTheme = defineMultiStyleConfig({ baseStyle });

const theme = extendTheme({
  fonts: {
    heading: `Inter`,
    body: `Inter`,
  },
  components: {
    Menu: menuTheme,
    Switch: Switch,
  },
  config,
});

export default theme;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
