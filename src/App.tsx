import * as React from "react";
import { Box } from "@chakra-ui/react";
import { DictionaryApp } from "./components";
import {
  DictionaryDefitinitionContext,
  Definition,
} from "./hooks/useDictionaryDefinition";
import { WordContext } from "./hooks/useWord";
import { useDebounce } from "@react-hook/debounce";

function App() {
  const [word, setWord] = React.useState("keyboard");
  const [definition, setDefinition] = React.useState<Definition>({
    entries: [],
  });

  React.useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((wordData) => {
        const data: Definition = {
          entries: Array.isArray(wordData) ? wordData : [],
          error: Array.isArray(wordData)
            ? undefined
            : {
                message: wordData.message,
                resolution: wordData.resolution,
                title: wordData.title,
              },
        };

        setDefinition(data);
      });
  }, [word, setDefinition]);

  return (
    <WordContext.Provider value={{ word, setWord }}>
      <DictionaryDefitinitionContext.Provider value={definition}>
        <Box paddingTop="58px" display="flex" justifyContent="center">
          <DictionaryApp />
        </Box>
      </DictionaryDefitinitionContext.Provider>
    </WordContext.Provider>
  );
}

export default App;
