import { Text, Box, UnorderedList } from "@chakra-ui/react";
import { WordMeaningList } from "./WordMeaningList";

type WordMeaningProps = {
  definitions: any;
};

export function WordMeaning({ definitions }: WordMeaningProps) {
  return (
    <Box marginBottom="40px">
      <Text
        marginBottom="25px"
        fontSize="20px"
        fontWeight="400"
        color="#757575"
      >
        Meaning
      </Text>
      <UnorderedList spacing="13px">
        <WordMeaningList definitions={definitions} />
      </UnorderedList>
    </Box>
  );
}
