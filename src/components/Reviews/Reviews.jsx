import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { Review } from "../Review/Review";

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
};
