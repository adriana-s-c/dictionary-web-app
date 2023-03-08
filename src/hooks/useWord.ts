import * as React from "react";

type Context = {
  word: string | undefined;
  setWord: (newWord: string) => void;
};

export const WordContext = React.createContext<Context>({
  word: undefined,
  setWord: () => undefined,
});

export const useWord = () => {
  return React.useContext(WordContext);
};
