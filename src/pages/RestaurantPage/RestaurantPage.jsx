import React from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";

export const RestaurantPage = ({ restaurants }) => {
  console.log(restaurants[0]);

  return (
    <div className="restaurant-items">
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[1]} />
      <Restaurant restaurant={restaurants[2]} />
      <Restaurant restaurant={restaurants[3]} />
    </div>
  );
};
