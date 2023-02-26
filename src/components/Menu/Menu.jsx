import React from "react";

import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      {menu.map(({ name, ingredients }) => (
        <Dish 
          name={name}
          ingredients={ingredients}
        ></Dish>
      ))}
    </div>
  );
};
