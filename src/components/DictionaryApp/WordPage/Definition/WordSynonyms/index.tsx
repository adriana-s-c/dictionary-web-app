import * as React from "react";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { TfiMoreAlt } from "react-icons/tfi";
import { TiArrowBack } from "react-icons/ti";
import { WordContext } from "../../../../../context";

export function WordSynonyms({ synonyms }: { synonyms: Array<string> }) {
  const [longList, setLongList] = React.useState(false);

  const { setWord } = React.useContext(WordContext);

  const handleClick = (synonym: string) => {
    return setWord(synonym);
  };

  function synonymsList(synonyms: Array<string>) {
    if (synonyms.length < 4) {
      return synonyms.map((synonym: string) => {
        return (
          <Text marginRight="15px" onClick={() => handleClick(synonym)}>
            {synonym}
          </Text>
        );
      });
    }
    if (synonyms.length > 3) {
      return longList === false
        ? synonyms.slice(0, 3).map((synonym: string) => {
            return (
              <Text marginRight="15px" onClick={() => handleClick(synonym)}>
                {synonym}
              </Text>
            );
          })
        : synonyms.map((synonym: string) => {
            return (
              <Text marginRight="15px" onClick={() => handleClick(synonym)}>
                {synonym}
              </Text>
            );
          });
    }
  }

  return (
    <Box display="flex" flexDir="row">
      <Text
        marginBottom="25px"
        fontSize="20px"
        fontWeight="400"
        color="#757575"
        marginRight="22px"
        width="98px"
      >
        Synonyms
      </Text>
      <Text
        fontSize="20px"
        fontWeight="700"
        color="#A445ED"
        display="flex"
        maxW={{ base: "240px", sm: "616px" }}
        textDecorationLine="underline"
        textUnderlineOffset="3px"
        textDecorationThickness="0"
        cursor="pointer"
      >
        <Box display="flex" flexDir="row" w="100%" flexWrap="wrap">
          {synonymsList(synonyms)}
        </Box>
      </Text>
      {synonyms.length > 3 ? (
        <IconButton
          aria-label="Click for more"
          icon={longList === true ? <TiArrowBack /> : <TfiMoreAlt />}
          _light={{ bgColor: "#FFFFFF" }}
          _dark={{ bgColor: "#050505" }}
          color="#A445ED"
          _hover={{ _light: { bgColor: "#FFFFFF" }, opacity: "25%" }}
          onClick={() =>
            longList === true ? setLongList(false) : setLongList(true)
          }
        />
      ) : null}
    </Box>
  );
}
