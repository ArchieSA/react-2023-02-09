import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { Review } from "../Review/Review";
import { useSelector } from "react-redux";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";

export const Reviews = ({ restaurantId }) => {
  const reviews = useSelector((state) => selectRestaurantReviewsById(state, {restaurantId}));
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(
          (reviewId) =>
            !!reviewId && (
              <li>
                <Review reviewId={reviewId} />
              </li>
            )
        )}
      </ul>
      <NewReviewForm />
    </div>
  );
};
