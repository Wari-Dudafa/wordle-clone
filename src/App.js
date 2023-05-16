import { useState, useEffect } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import TextDisplay from "./components/TextDisplay";
import Navbar from "./components/Navbar";

function App() {
  const rightWord = "TONES";
  const [letter, setLetter] = useState(" ");
  const [word, setWord] = useState([" ", " ", " ", " ", " "]);
  const [status, setStatus] = useState([1, 2, 2, 2, 2, 2]);

  const onDelete = () => {
    // Removes the most recent non white space in the array
    setLetter(" ");
    console.log("Delete");
  };
  
  const onEnter = () => {
    let tempWord = word;
    let tempStatus = status;
    let flag = false;

    // Check for white spaces
    for (let index = 0; index < tempWord.length; index++) {
      const element = tempWord[index];

      if (element === " ") {
        alert("Please complete your word before submitting");
        return;
      }
    }

    // Update the status array
    for (let index = 0; index < tempStatus.length; index++) {
      let element = tempStatus[index];

      if (element === 1) {
        tempStatus[index] = 3;
      }
      if (element === 2 && flag === false) {
        tempStatus[index] = 1;
        flag = true;
      }
    }

    setStatus(tempStatus);
    setLetter(" ");
    setWord([" ", " ", " ", " ", " "]);
  };

  const AddLetter = () => {
    let looper = true;
    let tempWord = word;
    let index = 0;

    // Check if letter should be added to word array
    while (looper) {
      if (tempWord[index] === " ") {
        tempWord[index] = letter;
        looper = false;
      }
      index = index + 1;
      if (index > 4) {
        looper = false;
      }
    }

    setLetter(" ");
    setWord(tempWord);
  };

  useEffect(() => {
    if (letter !== " " && letter !== "ENTER" && letter !== "DELETE") {
      AddLetter();
    } else if (letter === "ENTER") {
      onEnter();
    } else if (letter === "DELETE") {
      onDelete();
    }
  }, [letter, word, status]);

  const textDisplay = () => {
    // Status 1 = Current, 2 = Not done, 3 = Done
    return (
      <>
        <TextDisplay
          word={word}
          status={status[0]}
          rightWord={rightWord}
        ></TextDisplay>
        <TextDisplay
          word={word}
          status={status[1]}
          rightWord={rightWord}
        ></TextDisplay>
        <TextDisplay
          word={word}
          status={status[2]}
          rightWord={rightWord}
        ></TextDisplay>
        <TextDisplay
          word={word}
          status={status[3]}
          rightWord={rightWord}
        ></TextDisplay>
        <TextDisplay
          word={word}
          status={status[4]}
          rightWord={rightWord}
        ></TextDisplay>
        <TextDisplay
          word={word}
          status={status[5]}
          rightWord={rightWord}
        ></TextDisplay>
      </>
    );
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        {textDisplay()}
        <Keyboard setKey={setLetter}></Keyboard>
      </div>
    </>
  );
}

export default App;
