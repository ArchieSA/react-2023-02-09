import React from "react";

export const Menu = ({ menu = [] }) => {
  const allDishes = menu.map(({ name }) => name).join(", ");
  return <>Dishes: {allDishes}</>;
};
