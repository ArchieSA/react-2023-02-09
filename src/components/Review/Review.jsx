import React from "react";
import { SIZE } from "../../constants/size";
import { Rating } from "../Rating/Rating";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/entities/reviews/selectors";
import User from "../User/User";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) =>
    selectReviewById(state, { reviewId }))

  if (!review) {
    return null;
  }

  const { userId, text, rating } = review;
  return (
    <div className={styles.root}>
      <User userId={userId} />
      <div>{text}</div>
      <Rating value={rating} size={SIZE.s} />
    </div>
  );
};
