import * as React from "react";
import { Icon, IconButton } from "@chakra-ui/react";
import { WordContext } from "../../../../../context";

export function PlayWordSound() {
  const { word } = React.useContext(WordContext);
  const [hovered, setHovered] = React.useState(false);

  const PlayIcon = (props: any) => (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
      {...props}
    >
      <g fill="currentColor" fill-rule="evenodd">
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

  const handleClick = () => {
    const audioSrc = word[0].phonetics.find(
      (element: any) => element.audio.length > 0
    ).audio;
    const wordAudio = new Audio(audioSrc);
    return wordAudio.play();
  };

  return (
    <IconButton
      icon={<PlayIcon />}
      aria-label="play word sound"
      backgroundColor="white"
      _hover={{ bgColor: "white" }}
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
