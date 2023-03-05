import React from "react";

import { Button } from "../Button/Button";

import { BUTTON_VIEW_VARIANT } from "../Button/constants";
import { MAX_VALUE, MIN_VALUE } from './constants';

import StarGold from "./img/star-gold.svg";
import Star from "./img/star.svg";

import styles from "./styles.module.css";

export const Rating = ({ value, onChange, size }) => {

  if ( value < MIN_VALUE) value = MIN_VALUE;
  if ( value > MAX_VALUE) value = MAX_VALUE;

  const stars = [...Array(MAX_VALUE).keys()].map(i => i + 1);

  return (
    <div className={styles.root}>
      {
        stars.map((rating) => {
          return (
            <Button
              key={rating}
              onClick={() => onChange(rating)}
              size={size}
              viewVariant={BUTTON_VIEW_VARIANT.icon}
              disabled={!onChange}
            >
              <img className={styles[size]}  src={rating <= value ? StarGold : Star} alt="rating" />
            </Button>
          );
        })
      }
    </div>
  );
}
