import React from "react";
import { Rating } from "../Rating/Rating";

import styles from "./styles.module.css"

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;
  return (
    <div className={styles.root}>
      <div className={styles.user}>
        {user}
        <Rating value={rating} size="m"/>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
