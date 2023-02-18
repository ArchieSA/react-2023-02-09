import React from "react";
import {Menu} from "../Menu/Menu";
import {Reviews} from "../Reviews/Reviews";

export const Restaurant = ({restaurant}) => {
  const {name, menu, reviews} = restaurant;

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <div>
          <h3>Menu</h3>
          <Menu menu={menu}/>
        </div>
        <div>
          <h3>Reviews</h3>
          <Reviews reviews={reviews}/>
        </div>
      </div>
    </div>
  );
};
