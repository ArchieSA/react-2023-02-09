import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;
  return (
    <div key={id}>
      <h2>{name}</h2>
      <div className="menu">
        <Menu menu={menu} />
      </div>
      <div className="review">
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};
