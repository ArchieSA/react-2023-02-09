import React from "react";

import styles from "./styles.module.css"
import { Rating } from "../Rating/Rating";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;
  return (
    <div className={styles.root}>
      <div>{user}</div>
      <div>{text}</div>
      <div>{rating}</div>
      <Rating value={rating} size="s" />
    </div>
  );
};
