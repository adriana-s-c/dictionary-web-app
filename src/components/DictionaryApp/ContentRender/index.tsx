import * as React from "react";
import { DictionaryDefitinitionContext, WordContext } from "../../../context";
import { WordPage } from "../WordPage";
import { ErrorPage } from "../ErrorPage";

export function ContentRender() {
  const { dictionaryDefinition } = React.useContext(
    DictionaryDefitinitionContext
  );
  const { word } = React.useContext(WordContext);

  if (word.replace(/\s/g, "") === "") {
    return null;
  }
  if (dictionaryDefinition.length > 0) {
    return <WordPage />;
  }
  if (dictionaryDefinition.title === "No Definitions Found") {
    return <ErrorPage />;
  } else {
    return null;
  }
}
