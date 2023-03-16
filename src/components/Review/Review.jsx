import React from "react";
import { SIZE } from "../../constants/size";
import { Rating } from "../Rating/Rating";
import { User } from "../User/User";

import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/entities/reviews/selectors";

import styles from "./styles.module.css";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, {reviewId}));

  if (!review) {
    return null;
  }

  const { userId, text, rating } = review;
  return (
    <div className={styles.root}>
      <div><User userId={userId}/></div>
      <div>{text}</div>
      <Rating value={rating} size={SIZE.s} />
    </div>
  );
};
