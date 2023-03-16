import React from "react";
import { SIZE } from "../../constants/size";
import { Rating } from "../Rating/Rating";
import { useSelector } from 'react-redux'
import { selectReviewById } from '../../store/entities/review/selectors'
import { User } from '../User/User'

import styles from "./styles.module.css";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }))
  if (!review) {
    return null;
  }

  const { userId, text, rating } = review
  return (
    <div className={styles.root}>
      <User userId={userId} />
      <div>{text}</div>
      <Rating value={rating} size={SIZE.s} />
    </div>
  )
};
