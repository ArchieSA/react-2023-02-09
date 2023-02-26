import React, { useState } from "react";

import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;
  const [count, setCount] = useState(0);

  const MIN_DISH = 0;
  const MAX_DISH = 6;

  return (
    <div>
      {name} - {price}$
      <Button onClick={() => setCount(count - 1)} disabled={count - 1 < MIN_DISH}>-</Button>
      {count}
      <Button onClick={() => setCount(count + 1)} disabled={count + 1 > MAX_DISH}>+</Button>
      {
        count > 0 && !!ingredients.length &&
          <ul>
            {ingredients.map(ingredient => (
              <li><Ingredient ingredient={ingredient}/></li>
            ))}
          </ul>
      }
    </div>
  );
};
