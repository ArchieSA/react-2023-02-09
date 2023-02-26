import React, { useState } from "react";
import { Counter } from "../Counter/Counter";

export const IngredientItem = ({ ingredient }) => {
  const [ingredientCount, setIngredientCount] = useState(1);

  const addIngredientCount = () => {
    setIngredientCount((prev) => prev + 1);
  };

  const removeIngredientCount = () => {
    setIngredientCount((prev) => prev - 1);
  };

  return (
    <div className="ingredient_box">
      <li> {ingredient}</li>
      <div>
        <Counter
          classname="ingredient_counter"
          onAdd={addIngredientCount}
          onRemove={removeIngredientCount}
          count={ingredientCount}
        />
      </div>
    </div>
  );
};
