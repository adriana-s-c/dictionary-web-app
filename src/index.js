import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { listTheme } from "./components/componentsStyle/list";
import { switchTheme } from "./components/componentsStyle/switch";
import { menuTheme } from "./components/componentsStyle/menu";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "515px",
  md: "610px",
  lg: "750px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        _dark: { bg: "#050505" },
        _light: { bg: "#FFFFFF" },
      },
    }),
  },
  components: {
    Menu: menuTheme,
    Switch: switchTheme,
    List: listTheme,
  },
  config,
  breakpoints,
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
