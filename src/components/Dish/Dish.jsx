import React, { useState } from "react";
import { Button } from "../Button/Button";

import { Ingredient } from "../Ingredient/Ingredient";

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <Button onClick={() => count > 0 && setCount(count - 1)}>-</Button>
      {count}
      <Button onClick={() => count < 6 && setCount(count + 1)}>+</Button>
      {count > 0 &&
        ingredients.map((ingredient) => <Ingredient ingredient={ingredient} />)}
    </div>
  );
};
