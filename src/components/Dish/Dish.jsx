import React from "react";
import { SIZE } from "../../constants/size";
import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";
import { BUTTON_VIEW_VARIANT } from "../Button/constants";
import { Ingredient } from "../Ingredient/Ingredient";

import { ReactComponent as Plus } from "./img/thumb-up.svg";

import styles from "./styles.module.css";

export const Dish = ({ dish }) => {
  console.log(styles);
  const { count, increment, decrement } = useCount({ max: 6 });

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
            {/* <div className={styles.incrementActionContent} /> */}
            {/* <img className={styles.incrementActionImg} src={Plus} alt="+" /> */}
            <Plus />
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
