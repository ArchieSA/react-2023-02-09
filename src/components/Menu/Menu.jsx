import React from "react";
import { Dish } from "./Dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map(
          (dish) => 
            !!dish && (
              <li>
                <Dish {...dish}/>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
