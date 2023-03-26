import React from "react";
import { useSelector } from "react-redux";
import { selectDishById } from "../../store/entities/dish/selectors";
import classNames from "classnames";

import styles from "./Dish.module.css";
export const Dish = ({ dishId, className }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));

  if (!dish) {
    return null;
  }

  const { name, price } = dish;

  return (
    <span className={classNames(styles.root, className)}>
      <span>{name}</span>-<span>{price}</span>
    </span>
  );
};
