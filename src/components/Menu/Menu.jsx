import React from "react";

export const Menu = ({menu}) => {
  const restaurantDishes = menu.map(({name}) => name).join(" ,");
  return React.createElement('div', {
    children: restaurantDishes
  })
};
