import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import { loadReviewsIfNotExist } from "../../store/entities/review/thunk/loadReviewsIfNotExist";
import { loadUsersIfNotExist } from "../../store/entities/user/thunk/loadUsersIfNotExist";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
    dispatch(loadUsersIfNotExist(restaurantId));
  }, [restaurantId]);


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
