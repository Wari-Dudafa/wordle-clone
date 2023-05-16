import { useState, useEffect } from "react";
import "../styles/TextDisplay.css";

function TextDisplay(props) {
  const [word, setWord] = useState(props.word);
  const [wordBackup, setWordBackup] = useState(props.word);
  const [status, setStatus] = useState(props.status);
  const rightWord = props.rightWord;

  useEffect(() => {
    // Set new status
    setStatus(props.status);
    setWord(props.word);

    if (props.status === 1) {
      // Makes sure last ypes word is available
      setWordBackup(word);
    }
  }, [props.status, props.word, word]);

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
      let returnComponents = [1, 1, 1, 1, 1];

      for (let index = 0; index < rightWord.length; index++) {
        const element = rightWord[index];

        if (element === wordBackup[index]) {
          returnComponents[index] = true;
        } else {
          returnComponents[index] = false;
        }
      }

      const HandleColours = (returnComponents) => {
        return returnComponents.map((status, index) => {
          if (status) {
            return (
              <div key={index} className="text-right">
                {wordBackup[index].toUpperCase()}
              </div>
            );
          } else {
            return (
              <div key={index} className="text-wrong">
                {wordBackup[index].toUpperCase()}
              </div>
            );
          }
        });
      };

      return (
        <div className="text-container-3">
          {HandleColours(returnComponents)}
        </div>
      );
    }
  };

  return <div>{styleHandler()}</div>;
}

export default TextDisplay;
