import React from "react";
import { Dish } from "./Dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map(({ id, ingredients, name, price }) => {
        return (
          <div key={id}>
            <Dish ingredients={ingredients} name={name} price={price} />
          </div>
        );
      })}
    </div>
  );
};
