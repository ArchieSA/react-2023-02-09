import React from "react";

export const Review = ({ user, text, rating }) => {
  return (
    <div>
      <div>{user}</div>
      <div>{text}</div>
      <div>{rating}</div>
    </div>
  );
};
