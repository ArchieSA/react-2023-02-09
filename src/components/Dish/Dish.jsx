import React, { useState } from "react";

import { Counter } from "../Counter/Counter";
import { Ingredient } from "../Ingredient/Ingredient";

export const Dish = ({ name, ingredients }) => {
  const [dishIndex, setDishIndex] = useState(0); 

  return (
    <>
      <div>{name}</div>
      <Counter 
        index={dishIndex}
        setIndex={setDishIndex}
      ></Counter>
      <div>
      {dishIndex >= 1 && <div>Ingredients:</div>}
      {dishIndex >= 1 && ingredients.map(({ ingredient }) => (
        <Ingredient 
          name={ingredient}
        ></Ingredient>
      ))}
    </div>
    </>
  );
};