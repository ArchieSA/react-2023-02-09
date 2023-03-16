import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { selectReviews } from "../../store/entities/review/selectors";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { Review } from "../Review/Review";

export const Reviews = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, { restaurantId }));

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {restaurant.reviews.map((id) => (
          <li>
            <Review id={id} />
          </li>
        ))}
      </ul>
      <NewReviewForm />
    </div>
  );
};
