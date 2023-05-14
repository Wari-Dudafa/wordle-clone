import "./App.css";
import Keyboard from "./components/Keyboard";
import TextDisplay from "./components/TextDisplay";

function App() {
  return (
    <div className="App">
      <TextDisplay></TextDisplay>
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
