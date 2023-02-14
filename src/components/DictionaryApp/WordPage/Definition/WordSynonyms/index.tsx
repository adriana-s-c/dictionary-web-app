import { Box, Text } from "@chakra-ui/react";

export function WordSynonyms() {
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
        electronic keyboard
      </Text>
    </Box>
  );
}
