import React, { useState } from "react";
import { Rating } from "../Rating/Rating";

import styles from "./styles.module.css";

export const Review = ({ review }) => {
  const { user, text, rating } = review;
  const [currentRating, setCurrentRating] = useState(rating);

  if (!review) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div>{user}</div>
      <div>{text}</div>
      <div>
        <Rating value={currentRating} onChange={(newRating) => setCurrentRating(newRating)} size="s" />
      </div>
    </div>
  );
};
