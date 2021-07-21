import React from "react";

function Input(props) {
  return (
    <div>
      <input
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      ></input>
    </div>
  );
}
export default Input;
