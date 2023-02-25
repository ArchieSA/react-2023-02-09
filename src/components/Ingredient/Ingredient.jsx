import React, {useState} from 'react';
import {Counter} from "../Counter/Counter";
import {maxIngredientCount, minIngredientCount} from "../../constants/menu";

export const Ingredient = ({ingredient}) => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <i>{ingredient}</i>
      <Counter min={minIngredientCount} max={maxIngredientCount} count={count} setCount={setCount} />
    </div>
  );
};