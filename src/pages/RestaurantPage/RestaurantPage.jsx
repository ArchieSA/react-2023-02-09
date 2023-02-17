import React from "react";
import { Restaurant, Restaurant2 } from "../../components/Restaurant/Restaurant";

export const RestaurantPage = ({ restaurants }) => {

  return (
    <div>
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[1]} />
      <Restaurant restaurant={restaurants[2]} />
      <Restaurant restaurant={restaurants[3]} />
    </div>
  );
};

export const RestaurantPage2 = ({ restaurants }) => {

  return (
    <div>
      <Restaurant2 restaurant={restaurants[0]} />
      <Restaurant2 restaurant={restaurants[1]} />
      <Restaurant2 restaurant={restaurants[2]} />
      <Restaurant2 restaurant={restaurants[3]} />
    </div>
  );
};