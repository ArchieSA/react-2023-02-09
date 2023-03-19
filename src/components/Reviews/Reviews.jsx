import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_STATUSES } from "../../constants/statuses";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import { selectReviewIsLoading, selectReviews } from "../../store/entities/review/selectors";
import { loadReviewsIfNotExist } from "../../store/entities/review/thunks/loadReviewsIfNotExist";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  const isLoading = useSelector(selectReviewIsLoading);
  const reviews = useSelector((state) => selectRestaurantReviewsById(state, { restaurantId }));

  if (isLoading) {
    return <span>Loading...</span>;
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
