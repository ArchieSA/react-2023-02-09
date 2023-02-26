// @flow
import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";

export const Dish = ({ dish }) => {
  const [activeDishIndex, setDishIndex] = useState(0);

  const { name, ingredients } = dish;

  return (
    <div>
      {name}
      <Button
        onClick={() => setDishIndex(activeDishIndex + 1)}
        disabled={activeDishIndex > 5 ? true : false}
      >
        +
      </Button>
      <span>{activeDishIndex}</span>
      <Button
        onClick={() => setDishIndex(activeDishIndex - 1)}
        disabled={activeDishIndex === 0 ? true : false}
      >
        -
      </Button>
      <ul>
        {ingredients.map((ingredient) => {
          return activeDishIndex > 0 ? (
            <li>
              <Ingredient ingredient={ingredient} dishCount={activeDishIndex} />
            </li>
          ) : (
            <li>{ingredient}</li>
          );
        })}
      </ul>
    </div>
  );
};
