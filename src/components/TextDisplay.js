import { useState, useEffect } from "react";
import "../styles/TextDisplay.css";

function TextDisplay(props) {
  const [word, setWord] = useState(props.word);
  const [wordBackup, setWordBackup] = useState(props.word);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
    setWord(props.word)

    if (props.status === 1) {
      setWordBackup(word);
    }
  }, [props.status, props.word ,word]);

  const styleHandler = () => {
    if (status === 1) {
      // Current
      return (
        <div className="text-container-1">
          <div className="text-1">{word[0].toUpperCase()}</div>
          <div className="text-1">{word[1].toUpperCase()}</div>
          <div className="text-1">{word[2].toUpperCase()}</div>
          <div className="text-1">{word[3].toUpperCase()}</div>
          <div className="text-1">{word[4].toUpperCase()}</div>
        </div>
      );
    } else if (status === 2) {
      // Not done
      return (
        <div className="text-container-2">
          <div className="text-inactive-2"> </div>
          <div className="text-inactive-2"> </div>
          <div className="text-inactive-2"> </div>
          <div className="text-inactive-2"> </div>
          <div className="text-inactive-2"> </div>
        </div>
      );
    } else {
      // Done
      return (
        <div className="text-container-3">
          <div className="text-3">{wordBackup[0].toUpperCase()}</div>
          <div className="text-3">{wordBackup[1].toUpperCase()}</div>
          <div className="text-3">{wordBackup[2].toUpperCase()}</div>
          <div className="text-3">{wordBackup[3].toUpperCase()}</div>
          <div className="text-3">{wordBackup[4].toUpperCase()}</div>
        </div>
      );
    }
  };

  return <div>{styleHandler()}</div>;
}

export default TextDisplay;
