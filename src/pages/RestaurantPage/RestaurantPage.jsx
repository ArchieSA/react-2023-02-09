import React from "react";
import {Restaurant} from "../../components/Restaurant/Restaurant";

export const RestaurantPage = ({restaurants}) => {
  return (
    <div>
      {restaurants && restaurants.map(restaurant => <Restaurant restaurant={restaurant}/>)}
    </div>
  );
};
