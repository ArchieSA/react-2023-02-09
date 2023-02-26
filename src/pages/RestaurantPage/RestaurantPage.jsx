import React from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";

export const RestaurantPage = ({ restaurants }) => {
  return (
    <div className="restaurantPage">
      {restaurants.map((restaurant) => {
        return (
          <div className="restaurant" key={restaurant.id}>
            <Restaurant restaurant={restaurant} />
          </div>
        );
      })}
    </div>
  );
};
