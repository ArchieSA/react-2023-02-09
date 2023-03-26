import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu restaurantId={restaurantId} />
      {<Reviews restaurantId={restaurantId} />}
    </div>
  );
};