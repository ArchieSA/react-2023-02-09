import React, { useState } from "react";
import { Button } from "../Button/Button";

export const Ingredient = ({ name }) => {
  const [ingredientCount, setIngredientCount] = useState(1);

  return (
    <div>
      {name}
      <Button
        onClick={() => setIngredientCount(ingredientCount - 1)}
        disabled={ingredientCount === 0}
      >
        -
      </Button>
      {ingredientCount}
      <Button
        onClick={() => setIngredientCount(ingredientCount + 1)}
        disabled={ingredientCount === 6}
      >
        +
      </Button>
    </div>
  );
};
