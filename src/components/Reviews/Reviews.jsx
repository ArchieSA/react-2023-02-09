import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ restaurantId }) => {
  const reviews = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );

  return (
    <div>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map((id) => (
          <Review className={styles.review} reviewId={id} />
        ))}
      </div>
    </div>
  );
};
