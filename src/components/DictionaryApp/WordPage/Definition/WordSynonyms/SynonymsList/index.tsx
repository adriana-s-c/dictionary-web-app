import * as React from "react";
import { Text } from "@chakra-ui/react";
import { WordContext } from "../../../../../../context";

type SynonymsListProps = {
  synonyms: any;
  longList: boolean;
};

export function SynonymsList({ synonyms, longList }: SynonymsListProps) {
  const { setWord } = React.useContext(WordContext);

  const handleClick = (synonym: string) => {
    setWord(synonym);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  if (synonyms.length < 4) {
    return synonyms.map((synonym: string, key: any) => {
      return (
        <Text
          marginRight="15px"
          fontSize="20px"
          fontWeight="700"
          onClick={() => handleClick(synonym)}
          key={key}
          color="#A445ED"
          cursor="pointer"
          textDecorationLine="underline"
          textUnderlineOffset="3px"
          textDecorationThickness="0"
        >
          {synonym}
        </Text>
      );
    });
  }
  if (synonyms.length > 3) {
    return longList === false
      ? synonyms.slice(0, 3).map((synonym: string, key: any) => {
          return (
            <Text
              marginRight="15px"
              onClick={() => handleClick(synonym)}
              key={key}
              fontSize="20px"
              fontWeight="700"
              color="#A445ED"
              cursor="pointer"
              textDecorationLine="underline"
              textUnderlineOffset="3px"
              textDecorationThickness="0"
            >
              {synonym}
            </Text>
          );
        })
      : synonyms.map((synonym: string, key: any) => {
          return (
            <Text
              marginRight="15px"
              onClick={() => handleClick(synonym)}
              key={key}
              color="#A445ED"
              fontSize="20px"
              fontWeight="700"
              cursor="pointer"
              textDecorationLine="underline"
              textUnderlineOffset="3px"
              textDecorationThickness="0"
            >
              {synonym}
            </Text>
          );
        });
  }
}
