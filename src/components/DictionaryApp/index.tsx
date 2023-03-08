import * as React from "react";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { Search } from "./Search";
import { FontContext } from "../../context";
import { ContentRender } from "./ContentRender";
import { useWord } from "../../hooks/useWord";

export function DictionaryApp() {
  const [font, setFont] = React.useState("Inter");
  const { word } = useWord();

  return (
    <FontContext.Provider value={{ font, setFont }}>
      <Box
        w={{
          base: "360px",
          xs: "400px",
          sm: "500px",
          lg: "737px",
        }}
        fontFamily={font}
      >
        <NavBar />
        <Search key={word} />
        <ContentRender />
      </Box>
    </FontContext.Provider>
  );
}
