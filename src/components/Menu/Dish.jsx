import React, { useState } from "react";
import { Ingredients } from "./Ingredients/Ingredients";
import { Counter } from "./Counter/Counter";

export const Dish = ({ ingredients, price, id, name }) => {
  const [dishCount, setDishCount] = useState(0);
  const [dishPrice, setDishPrice] = useState(0);

  const addDishCount = () => {
    setDishCount((prev) => prev + 1);
    setDishPrice((prev) => prev + price);
  };

  const removeDishCount = () => {
    setDishCount((prev) => prev - 1);
    setDishPrice((prev) => prev - price);
  };

  return (
    <div className="dish">
      <div>
        <h3>
          {name} - <span>{dishPrice}$</span>
        </h3>
        {dishCount > 0 ? (
          <Ingredients ingredients={ingredients} />
        ) : (
          "No ingredients"
        )}
      </div>
      <Counter
        classname="dish_counter"
        onAdd={addDishCount}
        onRemove={removeDishCount}
        count={dishCount}
      />
    </div>
  );
};
