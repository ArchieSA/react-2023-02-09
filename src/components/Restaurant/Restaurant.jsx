import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {!!menu.length && <Menu menu={menu} />}
      {!!reviews.length && <Reviews reviews={reviews} />}
    </div>
  );
};
