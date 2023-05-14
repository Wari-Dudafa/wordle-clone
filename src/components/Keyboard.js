import React from "react";
import Button from "./Button";
import "../styles/Keyboard.css";

function Keyboard(props) {
  return (
    <div className="keyboard-container">
      <div className="first-row">
        <Button value={"Q"}></Button>
        <Button value={"W"}></Button>
        <Button value={"E"}></Button>
        <Button value={"R"}></Button>
        <Button value={"T"}></Button>
        <Button value={"Y"}></Button>
        <Button value={"U"}></Button>
        <Button value={"I"}></Button>
        <Button value={"O"}></Button>
        <Button value={"P"}></Button>
      </div>
      <div className="second-row">
        <Button value={"A"}></Button>
        <Button value={"S"}></Button>
        <Button value={"D"}></Button>
        <Button value={"F"}></Button>
        <Button value={"G"}></Button>
        <Button value={"H"}></Button>
        <Button value={"J"}></Button>
        <Button value={"K"}></Button>
        <Button value={"L"}></Button>
      </div>
      <div className="third-row">
        <Button value={"ENTER"}></Button>
        <Button value={"Z"}></Button>
        <Button value={"X"}></Button>
        <Button value={"C"}></Button>
        <Button value={"V"}></Button>
        <Button value={"B"}></Button>
        <Button value={"N"}></Button>
        <Button value={"DELETE"}></Button>
      </div>
    </div>
  );
}

export default Keyboard;
