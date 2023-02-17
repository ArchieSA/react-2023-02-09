import React from "react";
import { Menu, Menu2 } from "../Menu/Menu";
import { Reviews, Reviews2 } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>);
};

export const Restaurant2 = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  
  return React.createElement("div", {
    children: [
      React.createElement("h2", {
        children: name
      }),
      React.createElement(Menu2, {
        menu
      }),
      React.createElement(Reviews2, {
        reviews
      })
    ]
  });
};