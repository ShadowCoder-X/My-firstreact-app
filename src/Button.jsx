import React from "react";

function Button({ children, name }) {
  console.log(children);
  return (
    <div>
      <button className="pry-btn">{children}</button>
    </div>
  );
}

export default Button;
