import * as React from "react";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { TfiMoreAlt } from "react-icons/tfi";
import { TiArrowBack } from "react-icons/ti";
import { SynonymsList } from "./SynonymsList";

type WordSynonymsProps = {
  synonyms: Array<string>;
};

export function WordSynonyms({ synonyms }: WordSynonymsProps) {
  const [longList, setLongList] = React.useState(false);

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
        <SynonymsList synonyms={synonyms} longList={longList} />
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
