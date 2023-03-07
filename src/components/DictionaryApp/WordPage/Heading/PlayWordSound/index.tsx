import * as React from "react";
import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { DictionaryDefitinitionContext } from "../../../../../context";

export function PlayWordSound() {
  const { dictionaryDefinition } = React.useContext(
    DictionaryDefitinitionContext
  );
  const [hovered, setHovered] = React.useState(false);
  const { colorMode } = useColorMode();

  const PlayIcon = () => (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
    >
      <g fill="currentColor" fillRule="evenodd">
        <circle
          cx="37.5"
          cy="37.5"
          r="37.5"
          opacity={hovered ? "0px" : ".25"}
        />
        <path
          d="M29 27v21l21-10.5z"
          color={hovered ? "white" : "currentColor"}
        />
      </g>
    </Icon>
  );

  const audioSrc = dictionaryDefinition[0].phonetics.find(
    (element: any) => element.audio.length > 0
  );

  const handleClick = () => {
    const wordAudio = new Audio(audioSrc.audio);
    return wordAudio.play();
  };

  return audioSrc === undefined ? null : (
    <IconButton
      icon={<PlayIcon />}
      aria-label="play word sound"
      bgColor={colorMode === "light" ? "white" : "#050505"}
      _hover={{ bgColor: colorMode === "light" ? "white" : "#050505" }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      color="#A445ED"
      w="75px"
      h="75px"
      onClick={handleClick}
    />
  );
}
