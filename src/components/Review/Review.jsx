import React from "react";
import { SIZE } from "../../constants/size";
import { Rating } from "../Rating/Rating";

import styles from "./Review.module.css";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/entities/review/selectors";
import { User } from "../User/User";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));
  const { userId, text, rating } = review;
  return (
    <div className={styles.root}>
      <User userId={userId} />
      <div>{text}</div>
      <Rating value={rating} size={SIZE.s} />
    </div>
  );
};
