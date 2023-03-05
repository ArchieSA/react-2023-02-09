import React from 'react'
import { Rating } from '../Rating/Rating'
import { SIZE } from '../../constants/size'

import styles from './styles.module.css'

export const Review = ({ review }) => {
  if (!review) {
    return null
  }

  const { user, text, rating } = review
  return (
    <div className={styles.root}>
      <div className={styles.item}>{user}</div>
      <div className={styles.item}>{text}</div>
      {rating && <Rating value={rating} size={SIZE.s} max={5} />}
    </div>
  )
}
