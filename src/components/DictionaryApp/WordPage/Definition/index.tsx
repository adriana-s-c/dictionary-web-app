import * as React from "react";
import { Box } from "@chakra-ui/react";
import { WordTypedHeading } from "./WordTypeHeading";
import { WordMeaning } from "./WordMeaning";
import { WordSynonyms } from "./WordSynonyms";
import { WordContext } from "../../../../context";

export function Definition() {
  const { word } = React.useContext(WordContext);

  return (
    <Box>
      {word[0].meanings.map((meaning: any) => {
        return (
          <Box>
            <WordTypedHeading partOfSpeech={meaning.partOfSpeech} />
            <WordMeaning />
            {meaning.synonyms.length < 1 ? null : (
              <WordSynonyms synonym={meaning.synonyms} />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
