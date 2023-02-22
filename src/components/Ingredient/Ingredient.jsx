import React, { useState } from "react";
import { Button } from "../Button/Button";

export default function Ingredient({ ingredient }) {
  const [ingredientCount, setIngredientCount] = useState(1);

  const plusIngredientHandler = () => {
    if (ingredientCount < 6) {
      setIngredientCount(ingredientCount + 1);
    }
  }

  const minusIngredientHandler = () => {
    if (ingredientCount > 1) {
      setIngredientCount(ingredientCount - 1);
    }
  }

  return (
    <div>
      <span>{ingredient}</span> 
      <Button onClick={minusIngredientHandler}>-</Button>
      <span>{ingredientCount}</span>
      <Button onClick={plusIngredientHandler}>+</Button>
    </div>
  );
}
