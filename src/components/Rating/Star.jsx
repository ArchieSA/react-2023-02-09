import React from 'react';
import {Button} from "../Button/Button";

import styles from "./styles.module.css";

export const Star = ({rating, starImg, size, onChange}) => {
  return (
    <Button
      className={styles.buttonStar}
      size={size}
      onClick={() => onChange(rating)}
      disabled={!onChange}
    >
      <img src={starImg} alt="star"/>
    </Button>
  );
};