import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import Ingredients from "../Ingredients/Ingredients";

export default function Dish({ dish }) {
  const [dishCount, setDishCount] = useState(0);

  const { name, price, ingredients } = dish;

  const plusDishHandler = () => {
    if (dishCount < 6) {
      setDishCount(dishCount + 1);
    }
  };

  const minusDishHandler = () => {
    if (dishCount > 0) {
      setDishCount(dishCount - 1);
    }
  };

  return (
    <div>
      <h4>
        {name} - {price}$
      </h4>
      <Button onClick={minusDishHandler}>-</Button>
      <span>{dishCount}</span>
      <Button onClick={plusDishHandler}>+</Button>
      {dishCount > 0 && <Ingredients ingredients={ingredients}></Ingredients>}
    </div>
  );
}
