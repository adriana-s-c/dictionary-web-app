import { Box, Divider, Text } from "@chakra-ui/react";

export function WordTypedHeading() {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      h="29px"
      marginBottom="40px"
    >
      <Text fontSize="24px" fontWeight="700" marginRight="20px">
        noun
      </Text>
      <Divider borderColor="#979797" />
    </Box>
  );
}
