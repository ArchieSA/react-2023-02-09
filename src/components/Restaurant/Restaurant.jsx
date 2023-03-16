import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurantId }) => {
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
      <Reviews restaurantId={restaurantId} />
    </div>
  );
};
