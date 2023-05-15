import { useState } from "react";
import "../styles/TextDisplay.css";

function TextDisplay(props) {
  const [word] = useState(props.word);
  const [status] = useState(props.status);

  if (status == 1) {
    // Current
    return (
      <div className="text-container">
        <div className="text">{word[0].toUpperCase()}</div>
        <div className="text">{word[1].toUpperCase()}</div>
        <div className="text">{word[2].toUpperCase()}</div>
        <div className="text">{word[3].toUpperCase()}</div>
        <div className="text">{word[4].toUpperCase()}</div>
      </div>
    );
  } else if (status == 2) {
    // Not done
    return (
      <div className="text-container-inactive">
        <div className="text-inactive">{"."}</div>
        <div className="text-inactive">{"."}</div>
        <div className="text-inactive">{"."}</div>
        <div className="text-inactive">{"."}</div>
        <div className="text-inactive">{"."}</div>
      </div>
    );
  } else {
    // Done
    return (
      <div className="text-container-done">
        <div className="text-done">{word[0].toUpperCase()}</div>
        <div className="text-done">{word[1].toUpperCase()}</div>
        <div className="text-done">{word[2].toUpperCase()}</div>
        <div className="text-done">{word[3].toUpperCase()}</div>
        <div className="text-done">{word[4].toUpperCase()}</div>
      </div>
    );
  }
}

export default TextDisplay;
