// @flow
import React, { useState } from "react";
import { Button } from "../Button/Button";

export const Ingredient = ({ ingredient, dishCount }) => {
  const [activeIngredientIndex, setIngIndex] = useState(1);

  return (
    <div>
      {ingredient}
      <Button
        onClick={() => setIngIndex(activeIngredientIndex + 1)}
        disabled={dishCount - 1 < activeIngredientIndex ? true : false}
      >
        +
      </Button>
      <span>{activeIngredientIndex}</span>
      <Button
        onClick={() => setIngIndex(activeIngredientIndex - 1)}
        disabled={activeIngredientIndex < 1 ? true : false}
      >
        -
      </Button>
    </div>
  );
};
