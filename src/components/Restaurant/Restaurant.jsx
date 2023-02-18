import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { Reviews } from "../../components/Reviews/Reviews";

export const Restaurant = ({restaurant}) => {
  return <div> 
    <div>Name {restaurant.name}</div>
    <div>Menu: <Menu menu={restaurant.menu}/></div>
    <div>Reviews: <Reviews reviews={restaurant.reviews}/></div> <br/>
  </div>
};
