import { Box, Text } from "@chakra-ui/react";

export function WordSynonyms({ synonym }: { synonym: string }) {
  return (
    <Box marginTop="40px" display="flex" flexDir="row">
      <Text
        marginBottom="25px"
        fontSize="20px"
        fontWeight="400"
        color="#757575"
        marginRight="22px"
      >
        Synonyms
      </Text>
      <Text fontSize="20px" fontWeight="700" color="#A445ED">
        {synonym}
      </Text>
    </Box>
  );
}
