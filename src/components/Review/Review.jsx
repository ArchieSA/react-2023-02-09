import React from "react";

export const Review = ({ reveiw: { user, text, rating } }) => {
  return (
    <div>
      <div>{user}</div>
      <div>{text}</div>
      <div>{rating}</div>
    </div>
  );
};
