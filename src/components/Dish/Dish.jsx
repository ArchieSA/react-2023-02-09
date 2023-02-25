import React, {useState} from 'react';
import {Ingredient} from "../Ingredient/Ingredient";
import {Counter} from "../Counter/Counter";
import {maxDishCount, minDishCount} from "../../constants/menu";

export const Dish = ({dish}) => {
  const [count, setCount] = useState(0);
  const {name, ingredients, price} = dish;

  return (
    <div>
      <div>
        {name}: {price}$
        <Counter min={minDishCount} max={maxDishCount} count={count} setCount={setCount} />
      </div>
      {
        count > 0 && ingredients
          ? <div>{ingredients.map((ingredient) => <Ingredient ingredient={ingredient}/>)}</div>
          : ''
      }
    </div>
  );
};