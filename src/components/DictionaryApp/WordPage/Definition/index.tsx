import * as React from "react";
import { Box } from "@chakra-ui/react";
import { WordTypedHeading } from "./WordTypeHeading";
import { WordMeaning } from "./WordMeaning";
import { WordSynonyms } from "./WordSynonyms";
import { useDictionaryDefinition } from "../../../../hooks/useDictionaryDefinition";

export function Definition() {
  const dictionaryDefinition = useDictionaryDefinition();

  return (
    <Box>
      {dictionaryDefinition.entries[0].meanings.map((meaning: any, id: any) => {
        return (
          <Box key={id}>
            <WordTypedHeading partOfSpeech={meaning.partOfSpeech} />
            <WordMeaning definitions={meaning.definitions} />
            {meaning.synonyms.length < 1 ? null : (
              <WordSynonyms synonyms={meaning.synonyms} />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
