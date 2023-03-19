import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import { selectIsReviewLoading } from "../../store/entities/review/selectors";
import { Review } from "../Review/Review";
import { loadReviewsIfNotExist } from "../../store/entities/review/thunks/loadReviewsIfNotExist";
import styles from "./styles.module.css";

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId))
  }, [restaurantId])

  if (isLoading) {
    return (
      <div>
        <h3>Reviews</h3>
        <span>Loading...</span>
      </div>
    );
  }

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
