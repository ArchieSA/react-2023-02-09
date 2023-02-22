import React from "react";
import Ingredient from "../Ingredient/Ingredient";

export default function Ingredients({ ingredients }) {
  return (
    <ul>
      <li>
        {ingredients.map((ingredient) => (
          <Ingredient ingredient={ingredient}></Ingredient>
        ))}
      </li>
    </ul>
  );
}
