import Button from "./Button";
import "../styles/Keyboard.css";

function Keyboard(props) {

  const onTap = (value) => {
    console.log(value);
  };

  return (
    <div className="keyboard-container">
      <div className="first-row">
        <Button value={"Q"} onTap={() => {onTap('Q')}}></Button>
        <Button value={"W"} onTap={() => {onTap('W')}}></Button>
        <Button value={"E"} onTap={() => {onTap('E')}}></Button>
        <Button value={"R"} onTap={() => {onTap('R')}}></Button>
        <Button value={"T"} onTap={() => {onTap('T')}}></Button>
        <Button value={"Y"} onTap={() => {onTap('Y')}}></Button>
        <Button value={"U"} onTap={() => {onTap('U')}}></Button>
        <Button value={"I"} onTap={() => {onTap('I')}}></Button>
        <Button value={"O"} onTap={() => {onTap('O')}}></Button>
        <Button value={"P"} onTap={() => {onTap('P')}}></Button>
      </div>
      <div className="second-row">
        <Button value={"A"} ></Button>
        <Button value={"S"} ></Button>
        <Button value={"D"} ></Button>
        <Button value={"F"} ></Button>
        <Button value={"G"} ></Button>
        <Button value={"H"} ></Button>
        <Button value={"J"} ></Button>
        <Button value={"K"} ></Button>
        <Button value={"L"} ></Button>
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
