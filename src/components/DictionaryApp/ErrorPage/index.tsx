import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import confusedFaceEmoji from "../../../images/confused-face.png";
import { useDictionaryDefinition } from "../../../hooks/useDictionaryDefinition";

export function ErrorPage() {
  const dictionaryDefinition = useDictionaryDefinition();

  const { message = "", resolution = "" } = dictionaryDefinition.error ?? {};
  const errorMessage = message.concat(" ", resolution);

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      w={{
        base: "360px",
        xs: "400px",
        sm: "500px",
        lg: "737px",
      }}
    >
      <Img
        src={confusedFaceEmoji}
        alt="Confused face emoji"
        w="64px"
        marginBottom="24px"
      />
      <Text fontSize="20px" fontWeight="700" marginBottom="24px">
        {dictionaryDefinition.error?.title}
      </Text>
      <Text fontSize="18px" fontWeight="400" textAlign="center">
        {errorMessage}
      </Text>
    </Box>
  );
}
