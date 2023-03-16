import React from "react";
import { useSelector } from "react-redux";
import { SIZE } from "../../constants/size";
import { selectReviewById } from "../../store/entities/review/selectors";
import { Rating } from "../Rating/Rating";
import { User } from "../User/User";

import styles from "./styles.module.css";

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId: id }));

  const { text, rating, userId } = review;
  return (
    <div className={styles.root}>
      <div>{text}</div>
      <Rating value={rating} size={SIZE.s} />
      <User userId={userId} />
    </div>
  );
};
