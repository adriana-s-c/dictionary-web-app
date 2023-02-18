import { Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";

export function WordMeaning({ definitions }: { definitions: any }) {
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
        {definitions.map((singleDefinition: any) => {
          return (
            <Box>
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
        })}
      </UnorderedList>
    </Box>
  );
}
