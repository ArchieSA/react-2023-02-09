import React from "react";

export const Reviews = ({ reviews = [] }) => {
  const countSumRating = (total, review) => total + review.rating;
  const avrRating = reviews.reduce(countSumRating, 0) / reviews.length;
  const allReviews = reviews.map(({ text }) => text).join(", ");

  return (
    <>
      <div>Rating: {isNaN(avrRating) ? "" : avrRating.toFixed(1)}</div>
      <div>Reviews: {allReviews}</div>
    </>
  );
};
