import React from "react";

import "./Button.css";

const Button = ({ onClick, value, variant }) => (
  <button
    className={`Button Button--${variant}`}
    onClick={onClick ? () => onClick(value) : null}
  >
    {value}
  </button>
);

export default Button;
