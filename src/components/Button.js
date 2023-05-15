import React from "react";
import "../styles/Button.css";

function Button(props) {
  return (
    <div className="button-container">
      <button id="button" onClick={props.onTap}>
        {props.value}
      </button>
    </div>
  );
}

export default Button;
