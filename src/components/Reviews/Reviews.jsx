import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import { loadReviewsIfNotExist } from "../../store/entities/review/thunks/loadReviewsIfNotExist";
import { loadUsersIfNotExist } from "../../store/entities/user/thunks/loadUsersIfNotExist";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ restaurantId }) => {
  const reviews = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

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
