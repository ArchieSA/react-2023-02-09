import React from "react";

export const Menu = ({menu}) => {
  const restaurantMenu = menu.map(({ name }) => name).join(" ,");
  return <div>{restaurantMenu}</div>;
};
