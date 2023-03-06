import React from 'react';
import styles from './Rating.module.css';
import classNames from "classnames";
import {SIZE} from "../../constants/size";

const MAX_STAR_COUNT = 5;

const Rating = ({value, onChange, size = SIZE.m} = {}) => {
  return (
    <div className={classNames(styles.root)}>
      {
        [...Array(MAX_STAR_COUNT)].map((_, index) =>
          (<button
            className={classNames(
              styles[size],
              styles.star,
              {
                [styles.gold]: index < value,
                [styles.clickable]: !!onChange
              },
            )}
            onClick={onChange && (() => onChange(index + 1))}
          />)
        )
      }
    </div>
  );
};

export default Rating;