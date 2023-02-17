import React from "react";

export const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export const Button2 = ({children, onClick}) => {
  return React.createElement("button", {
    children,
    onClick
  })
};