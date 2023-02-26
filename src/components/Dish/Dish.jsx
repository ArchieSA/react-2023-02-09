import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";
import { Counter } from "../Counter/Counter";

export const Dish = ({ name, ingredients = [] }) => {
  const [amount, setAmount] = useState(0);
  const isDisplayIngredients = !!(amount && ingredients.length);
  // не совсем понял почему const isShowIngredients перезаписывается при изменении amount, это же константа
  // или она каждый раз создается при новом рендере, когда срабатывает хук useState?
  return (
    <div>
      {name}
      <Counter amount={amount} setAmount={setAmount} />
      {isDisplayIngredients && (
        <ul>
          {ingredients.map((ingredient) => (
            <li>
              <Ingredient name={ingredient} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
