import React from "react";

export const Button = ({ children, onClick, disabled = false}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
