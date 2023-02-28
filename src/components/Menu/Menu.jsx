import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>
          {menu.map((dish) => (
            <Dish dish={dish} />
          ))}
        </li>
      </ul>
    </div>
  );
};
