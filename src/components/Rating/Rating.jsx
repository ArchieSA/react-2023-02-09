import { useState } from "react";
import { ReactComponent as Star } from "./img/star.svg";
import { ReactComponent as StarGold } from "./img/star-gold.svg";
import cn from "classnames";
import styles from "./styles.module.css";

const defaultStarsArray = new Array(5).fill();

/**
 * Минимум и максиму не добавлял осознано т.к. логика
 * компонента подразумевает, что ввод будет работать от 1 до 5
 */

export const Rating = ({ value = 0, size = "l", onChange = null }) => {
  const [rating, setRating] = useState(value);

  return (
    <div
      className={styles["rating-container"]}
      onMouseLeave={() => setRating(value)}
    >
      {defaultStarsArray.map((_, index) =>
        index + 1 > rating ? (
          <Star
            key={`star-${index}`}
            className={cn(styles[size])}
            onMouseEnter={() => onChange && setRating(index + 1)}
          />
        ) : (
          <StarGold
            key={`star-gold-${index}`}
            className={cn(styles[size], onChange && styles.pointer)}
            {...(onChange && {
              onClick: () => onChange(index + 1),
              onMouseEnter: () => setRating(index + 1),
              onMouseLeave: () => setRating(index),
            })}
          />
        )
      )}
    </div>
  );
};
