import React from "react";
import { SIZE } from "../../constants/size";
import { Rating } from "../Rating/Rating";

import styles from "./styles.module.css";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;
  return (
    <div className={styles.root}>
      <div>{user}</div>
      <div>{text}</div>
      <Rating value={rating} size={SIZE.s} />
    </div>
  );
};
