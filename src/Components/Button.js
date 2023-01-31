import React from "react";
import "../Styles/Button.css";

const Button = ({ name, buttonHandler, style }) => {
  return (
    <div>
      <button onClick={buttonHandler} className={style}>
        {name}
      </button>
    </div>
  );
};

export default Button;
