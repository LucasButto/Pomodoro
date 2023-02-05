import React from "react";
import "../Styles/Button.css";

const Button = ({ name, buttonHandler, styles }) => {
  return (
    <div>
      <button onClick={buttonHandler} className={styles}>
        {name}
      </button>
    </div>
  );
};

export default Button;
