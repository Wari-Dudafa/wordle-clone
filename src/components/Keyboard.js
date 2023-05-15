import Button from "./Button";
import "../styles/Keyboard.css";

function Keyboard(props) {
  const onTap = (value) => {
    props.setKey(value);
  };

  return (
    <div className="keyboard-container">
      <div className="first-row">
        <Button
          value={"Q"}
          onTap={() => {
            onTap("Q");
          }}
        ></Button>
        <Button
          value={"W"}
          onTap={() => {
            onTap("W");
          }}
        ></Button>
        <Button
          value={"E"}
          onTap={() => {
            onTap("E");
          }}
        ></Button>
        <Button
          value={"R"}
          onTap={() => {
            onTap("R");
          }}
        ></Button>
        <Button
          value={"T"}
          onTap={() => {
            onTap("T");
          }}
        ></Button>
        <Button
          value={"Y"}
          onTap={() => {
            onTap("Y");
          }}
        ></Button>
        <Button
          value={"U"}
          onTap={() => {
            onTap("U");
          }}
        ></Button>
        <Button
          value={"I"}
          onTap={() => {
            onTap("I");
          }}
        ></Button>
        <Button
          value={"O"}
          onTap={() => {
            onTap("O");
          }}
        ></Button>
        <Button
          value={"P"}
          onTap={() => {
            onTap("P");
          }}
        ></Button>
      </div>
      <div className="second-row">
        <Button value={"A"} onTap={() => {onTap("A");}}></Button>
        <Button value={"S"} onTap={() => {onTap("S");}}></Button>
        <Button value={"D"} onTap={() => {onTap("D");}}></Button>
        <Button value={"F"} onTap={() => {onTap("F");}}></Button>
        <Button value={"G"} onTap={() => {onTap("G");}}></Button>
        <Button value={"H"} onTap={() => {onTap("H");}}></Button>
        <Button value={"J"} onTap={() => {onTap("J");}}></Button>
        <Button value={"K"} onTap={() => {onTap("K");}}></Button>
        <Button value={"L"} onTap={() => {onTap("L");}}></Button>
      </div>
      <div className="third-row">
        <Button value={"ENTER"} onTap={() => {onTap("ENTER");}}></Button>
        <Button value={"Z"} onTap={() => {onTap("Z");}}></Button>
        <Button value={"X"} onTap={() => {onTap("X");}}></Button>
        <Button value={"C"} onTap={() => {onTap("C");}}></Button>
        <Button value={"V"} onTap={() => {onTap("V");}}></Button>
        <Button value={"B"} onTap={() => {onTap("B");}}></Button>
        <Button value={"N"} onTap={() => {onTap("N");}}></Button>
        <Button value={"M"} onTap={() => {onTap("M");}}></Button>
        <Button value={"DELETE"} onTap={() => {onTap("DELETE");}}></Button>
      </div>
    </div>
  );
}

export default Keyboard;
