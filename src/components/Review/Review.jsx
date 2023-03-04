import React from "react";

import styles from "./styles.module.css"
import {Rating} from "../Rating/Rating";
import {SIZE} from "../../constants/size";

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
