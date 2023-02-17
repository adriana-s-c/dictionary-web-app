import * as React from "react";
import { Center } from "@chakra-ui/react";
import { DictionaryApp } from "./components";
import { WordContext } from "./context";

function App() {
  const [word, setWord] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/keyboard")
      .then((res) => res.json())
      .then((wordData) => {
        setWord(wordData);
      });
  }, []);

  return (
    <WordContext.Provider value={{ word, setWord }}>
      <Center paddingBlock="100px">
        <DictionaryApp />
      </Center>
    </WordContext.Provider>
  );
}

export default App;
