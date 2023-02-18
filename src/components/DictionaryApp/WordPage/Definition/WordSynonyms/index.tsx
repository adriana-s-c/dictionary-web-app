import { Box, Text } from "@chakra-ui/react";

export function WordSynonyms({ synonyms }: { synonyms: Array<string> }) {
  return (
    <Box display="flex" flexDir="row">
      <Text
        marginBottom="25px"
        fontSize="20px"
        fontWeight="400"
        color="#757575"
        marginRight="22px"
      >
        Synonyms
      </Text>
      <Text fontSize="20px" fontWeight="700" color="#A445ED" display="flex">
        {synonyms.map((synonym: string) => {
          return <Text marginRight="15px">{synonym}</Text>;
        })}
      </Text>
    </Box>
  );
}
