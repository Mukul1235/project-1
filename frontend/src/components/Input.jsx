import React from "react";

function Input(props) {
  return (
    <input
      className="input-field"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}></input>
  );
}

export default Input;
