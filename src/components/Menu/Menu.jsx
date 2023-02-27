import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map(({ name, ingredients }) => (
          <li>
            <h4>{name}</h4>
            <Dish ingredients={ingredients} />
          </li>
        ))}
      </ul>
    </div>
  );
};
