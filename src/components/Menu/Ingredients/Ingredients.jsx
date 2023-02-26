import React from "react";
import { IngredientItem } from "./IngredientItem";

export const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient, index) => {
        return <IngredientItem key={index} ingredient={ingredient} />;
      })}
    </div>
  );
};
