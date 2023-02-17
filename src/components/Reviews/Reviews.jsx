import React from "react";

export const Reviews = ({ reviews }) => {
  const restaurantReviews = reviews.map(({ text }) => text).join(" ,");

  return (
    <div>
      <h3>Reviews</h3>
      <div>{restaurantReviews}</div>
    </div>
  );
};

export const Reviews2 = ({ reviews }) => {
  const restaurantReviews = reviews.map(({ text }) => text).join(" ,");

  return React.createElement("div", {
    children: [
      React.createElement("h3", {
        children: "Reviews"
      }),
      React.createElement("div", {
        children: restaurantReviews
      })
    ]
  });
};

