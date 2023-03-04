import React from 'react';
import {Star} from "./Star";

import styles from './styles.module.css';
import ImgStarBlack from './img/star.svg';
import ImgStarGold from './img/star-gold.svg';

const minValue = 1;
const maxValue = 5;

export const Rating = ({value = null, size, onChange = null}) => {
  if (value < minValue || value > maxValue) return null;

  const stars = [...Array(maxValue).keys()].map(i => i + 1);
  const starsGold = value ? stars.slice(0, value) : [];
  const starsBlack = value ? stars.slice(value): stars;

  const propsStarGold = {size, onChange, starImg: ImgStarGold};
  const propsStarBlack = {size, onChange, starImg: ImgStarBlack};

  return (
    <div className={styles.starsWrapper}>
      {starsGold.map((rating) => <Star rating={rating} {...propsStarGold} />)}
      {starsBlack.map((rating) => <Star rating={rating} {...propsStarBlack} />)}
    </div>
  );
};