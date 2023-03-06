import * as React from "react";
import { Box } from "@chakra-ui/react";
import { WordTypedHeading } from "./WordTypeHeading";
import { WordMeaning } from "./WordMeaning";
import { WordSynonyms } from "./WordSynonyms";
import { DictionaryDefitinitionContext } from "../../../../context";

export function Definition() {
  const { dictionaryDefinition } = React.useContext(
    DictionaryDefitinitionContext
  );

  return (
    <Box>
      {dictionaryDefinition[0].meanings.map((meaning: any, id: any) => {
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
