import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { Review } from "../Review/Review";

<<<<<<< HEAD
export const Reviews = ({reviews}) => {
  const restaurantReviews = reviews.map(({ text }) => text).join(" ,");
  //return <div>{restaurantReviews}</div>
  return React.createElement('div', {}, restaurantReviews);
=======
export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(
          (review) =>
            !!review && (
              <li>
                <Review review={review} />
              </li>
            )
        )}
      </ul>
      <NewReviewForm />
    </div>
  );
>>>>>>> fd4cf4975a9c3ae426087720930fbe5c1454130a
};
