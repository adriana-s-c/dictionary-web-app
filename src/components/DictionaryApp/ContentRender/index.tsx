import * as React from "react";
import { WordPage } from "../WordPage";
import { ErrorPage } from "../ErrorPage";
import { useWord } from "../../../hooks/useWord";
import { useDictionaryDefinition } from "../../../hooks/useDictionaryDefinition";

export function ContentRender() {
  const dictionaryDefinition = useDictionaryDefinition();
  const { word } = useWord();

  if (word?.replace(/\s/g, "") === "") {
    return null;
  }
  if (dictionaryDefinition.entries.length > 0) {
    return <WordPage />;
  }
  if (dictionaryDefinition.error) {
    return <ErrorPage />;
  } else {
    return null;
  }
}
