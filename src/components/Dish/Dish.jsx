import React from "react";
import { SIZE } from "../../constants/size";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { BUTTON_VIEW_VARIANT } from "../Button/constants";
import { Ingredient } from "../Ingredient/Ingredient";

import styles from "./styles.module.css";
import { selectDishCount } from "../../store/cart/selectors";
import { selectDishById } from "../../store/entities/dish/selector";

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) =>
    selectDishCount(state, { dishName: dish.name })
  );

  const dispatch = useDispatch();
  const increment = () =>
    dispatch({ type: "incrementDish", payload: dish.name });
  const decrement = () =>
    dispatch({ type: "decrementDish", payload: dish.name });

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div className={styles.root}>
      <div className={styles.dish}>
        <div className={styles.title}>
          <span>{name}</span>-<span>{price}</span>
        </div>
        <div className={styles.actions}>
          <Button
            onClick={decrement}
            className={styles.action}
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANT.secondary}
            disabled={count === 0}
          >
            -
          </Button>
          {count}
          <Button
            onClick={increment}
            className={styles.action}
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANT.secondary}
            disabled={count === 6}
          >
            +
          </Button>
        </div>
      </div>
      {count > 0 && !!ingredients.length && (
        <div>
          {ingredients.map((ingredient) => (
            <Ingredient name={ingredient} />
          ))}
        </div>
      )}
    </div>
  );
};
