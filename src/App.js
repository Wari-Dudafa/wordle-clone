import { useState, useEffect } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import TextDisplay from "./components/TextDisplay";

function App() {
  const [letter, setLetter] = useState(".");
  const [word, setWord] = useState([".", ".", ".", ".", "."]);

  useEffect(() => {
    if (letter !== "." && letter !== "ENTER" && letter !== "DELETE") {
      let looper = true;
      let tempWord = word;
      let index = 0;

      while (looper) {
        if (tempWord[index] === ".") {
          tempWord[index] = letter;
          looper = false;
        }
        index = index + 1;
        if (index > 4) {
          looper = false;
        }
      }

      console.log("Letter: " + letter);
      console.log("Temp: " + tempWord);
      console.log("Real: " + word);

      setLetter(".");
      setWord(tempWord);
    } else if (letter === "ENTER") {
      setLetter(".");
      console.log("Enter");
    } else if (letter === "DELETE") {
      setLetter(".");
      console.log("Delete");
    }
  }, [letter, word]);

  return (
    <div className="App">
      <TextDisplay word={word}></TextDisplay>
      <Keyboard setKey={setLetter}></Keyboard>
    </div>
  );
}

export default App;
