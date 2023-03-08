import * as React from "react";

export type Definition = {
  entries: any[];
  error?: { message: string; resolution: string; title: string };
};

export const DictionaryDefitinitionContext = React.createContext<Definition>({
  entries: [],
});

export const useDictionaryDefinition = () => {
  return React.useContext(DictionaryDefitinitionContext);
};
