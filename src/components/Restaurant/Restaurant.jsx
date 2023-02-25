import React from "react";
<<<<<<< HEAD
import { Menu } from "../../components/Menu/Menu";
import { Reviews } from "../../components/Reviews/Reviews";

export const Restaurant = ({restaurant}) => {
  return <div> 
    <div>Name {restaurant.name}</div>
    <div>Menu: <Menu menu={restaurant.menu}/></div>
    <div>Reviews: <Reviews reviews={restaurant.reviews}/></div> <br/>
  </div>
=======
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
>>>>>>> fd4cf4975a9c3ae426087720930fbe5c1454130a
};
