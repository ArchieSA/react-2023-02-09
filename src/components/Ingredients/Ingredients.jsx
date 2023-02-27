import React from 'react';
import Ingredient from "../Ingredient/Ingredient";

const Ingredients = ({ingredients}) => {
  return (
    <ul>
      <li>
        {ingredients.map(ingredient => (
          <Ingredient ingredient={ingredient} />
        ))}
      </li>
    </ul>
  );
};

export default Ingredients;