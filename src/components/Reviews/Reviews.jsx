import React from "react";

export const Reviews = ({ review }) => {
  const { id, user, text, rating } = review;
  return (
    <div className="reviews" key={id}>
      <h5 className="user">{user}</h5>
      <div className="review-rate">
        <p>{text}</p>
        <p className="rate">{rating} &#9733;</p>
      </div>
    </div>
  );
};
