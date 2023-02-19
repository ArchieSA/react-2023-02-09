import React from "react";

import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews} = restaurant;
  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews}/>
    </div>
  );
  // return React.createElement("div", {
  //   children: [
  //     React.createElement("h2", {
  //       children: name
  //     }),
  //     React.createElement(Menu, {
  //       menu
  //     }),
  //     React.createElement(Reviews, {
  //       reviews
  //     }),
  //   ]
  // });
};
