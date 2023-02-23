import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  return (
    <>
      <h2>{name}</h2>
      <div>
        <Menu menu={menu} />
      </div>
      <div>
        <Reviews reviews={reviews} />
      </div>
      <br />
    </>
  );
};
