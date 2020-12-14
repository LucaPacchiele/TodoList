import React from "react";
import Button from "./Button";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

function Card(props) {
  return (
    <div>
      <h2>
        Io {props.nome} {props.cognome} ho {props.eta} anni, conosco molto bene{" "}
        {props.skill}
      </h2>
      <Button
        description="likes"
        numero={getRandomInt(100, 1001)}
        
      />
      <Button
        description="dislikes"
        numero={getRandomInt(100, 1001)}
        
      />
    </div>
  );
}

export default Card;
