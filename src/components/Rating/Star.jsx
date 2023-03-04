import React from 'react';
import styles from "./styles.module.css";
import {Button} from "../Button/Button";

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