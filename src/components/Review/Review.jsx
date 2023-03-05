import React from "react";

import { Rating } from "../Rating/Rating";
import { SIZE } from "../../constants/size";

import styles from "./styles.module.css"

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;
  return (
    <div className={styles.root}>
      <div>{user}</div>
      <div>{text}</div>
      { !!rating && <Rating size={SIZE.s} value={rating} /> }
      {/* <div>{rating}</div> */}
    </div>
  );
};
