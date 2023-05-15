import { useState } from "react";
import "../styles/TextDisplay.css";

function TextDisplay(props) {
  const [word] = useState(props.word);

  return (
    <div className="text-container">
      <div className="text-container"></div>
      <div className="text">{word[0].toUpperCase()}</div>
      <div className="text">{word[1].toUpperCase()}</div>
      <div className="text">{word[2].toUpperCase()}</div>
      <div className="text">{word[3].toUpperCase()}</div>
      <div className="text">{word[4].toUpperCase()}</div>
    </div>
  );
}

export default TextDisplay;
