import React from "react";
import { SIZE } from "../../constants/size";
import { cartSlice } from "../../store/cart";
import { BUTTON_VIEW_VARIANT } from "../Button/constants";

import { useDispatch, useSelector } from "react-redux";
import { selectDishCount } from "../../store/cart/selectors";
import { selectDishById } from "../../store/entities/dish/selectors";
import classNames from "classnames";

import styles from "./DishCount.module.css";

import { Button } from "../Button/Button";
import { Dish } from "../Dish/Dish";
export const DishCount = ({ dishId, className }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));

  const count = useSelector((state) =>
    selectDishCount(state, { dishName: dish?.name })
  );
  const dispatch = useDispatch();
  const increment = () => dispatch(cartSlice.actions.incrementDish(dish.name));
  const decrement = () => dispatch(cartSlice.actions.decrementDish(dish.name));

  if (!dish) {
    return null;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.dish}>
        <Dish dishId={dishId} className={styles.title} />
        <div className={styles.actions}>
          <Button
            onClick={decrement}
            className={styles.action}
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANT.secondary}
            disabled={count === 0}
          >
            <span className={styles.icon}>-</span>
          </Button>
          {count}
          <Button
            onClick={increment}
            className={styles.action}
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANT.secondary}
            disabled={count === 6}
          >
            <span className={styles.icon}>+</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
