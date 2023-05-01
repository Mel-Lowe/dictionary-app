import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="definition">{props.meaning.definition}</div>
      <div className="fst-italic example">{props.meaning.example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
