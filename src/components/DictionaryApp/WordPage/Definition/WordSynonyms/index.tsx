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
      <Box
        display="flex"
        flexDir="row"
        w="100%"
        flexWrap="wrap"
        maxW={{ base: "240px", sm: "616px" }}
      >
        {synonymsList(synonyms)}
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
    </Box>
  );
}
