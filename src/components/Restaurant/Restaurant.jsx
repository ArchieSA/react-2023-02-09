import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant: { name, menu, reviews } }) => {
  return (
    <>
      <div>{name}</div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </>
  );
};
