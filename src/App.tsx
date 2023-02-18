import * as React from "react";
import { Center } from "@chakra-ui/react";
import { DictionaryApp } from "./components";
import { WordContext, DictionaryDefitinitionContext } from "./context";

function App() {
  const [word, setWord] = React.useState("keyboard");
  const [dictionaryDefinition, setDictionaryDefinition] = React.useState("");

  React.useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((wordData) => {
        setDictionaryDefinition(wordData);
      });
  }, [word]);

  return (
    <WordContext.Provider value={{ word, setWord }}>
      <DictionaryDefitinitionContext.Provider
        value={{ dictionaryDefinition, setDictionaryDefinition }}
      >
        <Center paddingBlock="100px">
          <DictionaryApp />
        </Center>
      </DictionaryDefitinitionContext.Provider>
    </WordContext.Provider>
  );
}

export default App;
