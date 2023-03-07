import { Box, ListItem, Text } from "@chakra-ui/react";

type WordMeaningProps = {
  definitions: any;
};

export function WordMeaningList({ definitions }: WordMeaningProps) {
  return definitions.map((singleDefinition: any, id: any) => {
    return (
      <Box key={id}>
        <ListItem fontSize="18px" color="2D2D2D">
          {singleDefinition.definition}
        </ListItem>
        {singleDefinition.example ? (
          <Text
            fontWeight="400"
            fontSize="18px"
            color="#757575"
            marginTop="13px"
          >
            "{singleDefinition.example}"
          </Text>
        ) : null}
      </Box>
    );
  });
}
