import React from "react";

export const Reviews = ({reviews}) => {
  const restaurantReviews = reviews.map(({ text }) => text).join(" ,");
  //return <div>{restaurantReviews}</div>
  return React.createElement('div', {}, restaurantReviews);
};
