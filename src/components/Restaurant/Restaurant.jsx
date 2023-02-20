import React from "react";
import { Reviews } from "../Reviews/Reviews";
import { Menu } from "../Menu/Menu";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h1>{name}</h1>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
