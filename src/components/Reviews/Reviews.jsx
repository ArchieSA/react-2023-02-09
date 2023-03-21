import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import { Review } from "../Review/Review";
import { loadReviewIfNotExist } from "../../store/entities/review/thunks/loadReviewIfNotExist";
import { selectReviewsIsLoading } from "../../store/entities/review/selectors";
import { Loader } from "../Loader/Loader";
import styles from "./styles.module.css";
import { loadRestaurantIfNotExist } from "../../store/entities/restaurant/thunks/loadRestaurantsIfNotExist";
import { loadUsersIfNotExists } from "../../store/entities/user/thunks/loadUsersIfNotExists";

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );
  const isLoading = useSelector(selectReviewsIsLoading);
  useEffect(() => {
    dispatch(loadReviewIfNotExist(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <Loader />;
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
