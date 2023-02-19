import React from "react";

export const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
  // return React.createElement('button', {
  //   onClick,
  //   children
  // });

};
