import React from "react";
import { SIZE } from "../../constants/size";
import { ReactComponent as StarGold } from "./img/star-gold.svg";
import { ReactComponent as Star } from "./img/star.svg";
import styles from "./styles.module.css";
import classNames from "classnames";

const MAX_LENGHT = 5;
const MIN_LENGTH = 1;

export const Rating = ({ value, size = SIZE.m, onChange }) => {
  const getStars = (value) => {
    let content = [];
    for (let i = 0; i < MAX_LENGHT; i++) {
      if (i < value) {
        content.push(
          <StarGold className={classNames(styles.root, styles[size])} />
        );
      } else {
        content.push(
          <Star className={classNames(styles.root, styles[size])} />
        );
      }
    }

    return content;
  };

  const setStars = (onChange) => {
    let content = [];
    for (let i = MIN_LENGTH; i <= MAX_LENGHT; i++) {
      content.push(
        <StarGold
          onClick={(e) => onChange(i)}
          className={classNames(styles.root, styles[size])}
        />
      );
    }

    return content;
  };

  return onChange ? setStars(onChange) : getStars(value);
};
