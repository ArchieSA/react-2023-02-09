import React from "react";
import { Dish } from "../Dish/Dish";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;
  const dish = {
    id: 'kotletka-id',
    name: 'Kotletka',
    ingredients: [{
      id: 'mjasko-id',
      name: 'mjasko',
    }, {
      id: 'sir-id',
      name: 'sir',
    }]
  }

  return (
    <div>
      <h2>{name}</h2>
      {!!menu.length && <Menu menu={menu} />}
      {!!reviews.length && <Reviews reviews={reviews} />}
      <Dish dish={dish}/>
    </div>
  );
};
