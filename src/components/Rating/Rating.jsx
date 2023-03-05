import React, { useState } from "react";
import styles from "./rating.module.css";

import { SIZE } from "../../constants/size";

import classNames from "classnames";
import GoldStars from "./img/star-gold.svg";
import Star from "./img/star.svg";

const MIN = 1;
const MAX = 5;
export const Rating = ({
  value,
  onChanged,
  size = SIZE.m,
  active = false,
  className = "",
}) => {
  const stars = [];
  value = value < 0 ? 0 : value; // Если по какой-то причине рейтинг меньше 0, то все равно надо показывать компонент, с минимальным значением
  value = value > MAX ? MAX : value; // Если по какой-то причине рейтинг больше MAX, то все равно надо показывать компонент, с MAX

  for (let rating = MIN; rating <= MAX; ++rating) {
    stars.push(
      <img
        className={classNames(styles[size], className, {
          [styles.active]: active,
        })}
        src={value >= rating ? GoldStars : Star}
        onClick={onChanged && (() => onChanged(rating))}
        alt={`rating ${rating}`}
      />
    );
  }

  return <div className={styles.root}>{stars}</div>;
};
