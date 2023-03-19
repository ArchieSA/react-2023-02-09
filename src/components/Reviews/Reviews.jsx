import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";
import { selectIsUserLoading } from "../../store/entities/user/selectors";
import { loadUserIfNotExist } from "../../store/entities/user/thunks/loadUserIfNotExist";

export const Reviews = ({ restaurantId }) => {
  
  const reviews = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsUserLoading);


  useEffect(() => {
    dispatch(loadUserIfNotExist());
  }, [reviews, dispatch]);

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
