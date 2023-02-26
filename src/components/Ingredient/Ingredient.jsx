import React, { useState } from "react";
import { Counter } from "../Counter/Counter";

export const Ingredient = ({ name }) => {
  const [ingredientIndex, setIngredientIndex] = useState(1); 

  return (
    <>
      <div>{name}</div>
      <Counter 
        index={ingredientIndex}
        setIndex={setIngredientIndex}
      ></Counter>
    </>
  );
};