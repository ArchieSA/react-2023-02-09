import classNames from "classnames";

import React from "react";
import { useSelector } from "react-redux";
import { SIZE } from "../../constants/size";
import { selectReviewById } from "../../store/entities/review/selectors";
import { Rating } from "../Rating/Rating";
import { User } from "../User/User";

import styles from "./styles.module.css";

export const Review = ({ reviewId, className }) => {

  const review = useSelector((state) => {
    return selectReviewById(state, { reviewId })
  });

  if (!review) {
    return null;
  }

  const { text, rating, userId } = review;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <User userId={userId} />
        <Rating value={rating} size={SIZE.s} />
      </div>
      <div>{text}</div>
    </div>
  );
};