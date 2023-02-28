import { Ingredient } from "./Ingredient";
import { Button } from "../Button/Button";
import React, { useState } from "react";

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;
  const [dishCount, setDishCount] = useState(0);

  return (
    <div>
      <div>{name}-</div>
      <div>{price}</div>
      <Button
        onClick={() => setDishCount(dishCount - 1)}
        disabled={dishCount === 0}
      >
        -
      </Button>
      {dishCount}
      <Button
        onClick={() => setDishCount(dishCount + 1)}
        disabled={dishCount === 6}
      >
        +
      </Button>
      {dishCount > 0 && (
        <ul>
          <li>
            {ingredients.map((ingredient) => (
              <Ingredient name={ingredient} />
            ))}
          </li>
        </ul>
      )}
    </div>
  );
};
