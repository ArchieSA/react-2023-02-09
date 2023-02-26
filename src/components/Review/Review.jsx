import React from "react";

export const Review = ({ review }) => {

  const { user, text, rating } = review;

  return (
    <div>
      <div>{user}</div>
      <div>{text}</div>
      <div>{rating}</div>
    </div>
  );
};
