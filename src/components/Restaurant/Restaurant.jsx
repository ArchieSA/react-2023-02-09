import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, id, menu, reviews } = restaurant;

  return (
    <div key={id} className="restaurant-item">
      <h1 className="title">{name}</h1>
      <div className="Menu">
        {menu.map((menuItem) => (
          <Menu key={menuItem.id} menuItem={menuItem} />
        ))}
      </div>
      <div className="Reviews">
        {reviews.map((review) => (
          <Reviews key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
