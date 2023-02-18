import React from "react";

// export const Menu = ({menu}) => {
//   const restaurantDishes = menu.map(({ name }) => name).join(" ,");
//   return <div>{restaurantDishes}</div>
// };
export const Menu = ({menu}) => {
  const restaurantDishes = menu.map(({ name }) => name).join(" ,");
  // return <div>{restaurantDishes}</div>;
  return React.createElement('div', {}, restaurantDishes);
};