import React from "react";

function Button(props) {
  return (
    <div>
      <button className="pry-btn">This is {props.name} button </button>
    </div>
  );
}

export default Button;
