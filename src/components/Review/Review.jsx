import React from "react";

export const Review = ({ reveiw }) => {
  const { user, text, rating } = reveiw;

  return (
    <div>
      <div>{user}</div>
      <div>{text}</div>
      <div>{rating}</div>
    </div>
  );
};
