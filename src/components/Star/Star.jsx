import React from 'react';
import classNames from "classnames";
import styles from "./styles.module.css";

export const Star = ({value, size="m", type, setRating}) => {
  
  const handleClick = (ratingValue) => {

    if(setRating && typeof setRating === "function"){
      setRating(ratingValue);
    }
  }
  
  return (
    <button 
      value = {value} 
      onClick = {(e) => handleClick(e.target.value)}
      className={classNames(styles.root, styles[size], styles[type], {[styles.active]: typeof setRating === "function"})}
      disabled={setRating === "undefined"}
    >
    </button>
  )
}
