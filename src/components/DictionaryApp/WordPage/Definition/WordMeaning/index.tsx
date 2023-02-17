import { Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";

export function WordMeaning() {
  return (
    <Box>
      <Text
        marginBottom="25px"
        fontSize="20px"
        fontWeight="400"
        color="#757575"
      >
        Meaning
      </Text>
      <UnorderedList spacing="13px" color="#2D2D2D">
        <ListItem>
          (etc.) A set of keys used to operate a typewriter, computer etc.
        </ListItem>
        <ListItem>
          A component of many instruments including the piano, organ, and
          harpsichord consisting of usually black and white keys that cause
          different tones to be produced when struck.
        </ListItem>
        <ListItem>
          A device with keys of a musical keyboard, used to control electronic
          sound-producing devices which may be built into or separate from the
          keyboard device.
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
