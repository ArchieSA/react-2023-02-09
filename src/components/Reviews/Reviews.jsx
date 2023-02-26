import React from "react";

export const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <hr />
      {reviews.map(({ id, user, text, rating }) => {
        return (
          <div key={id}>
            <h3>{user}</h3>
            <span>
              {text}, my rating is {rating}
            </span>
          </div>
        );
      })}
    </div>
  );
};
