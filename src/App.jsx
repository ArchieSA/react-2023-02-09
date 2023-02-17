import React from "react";
import { restaurants } from "./constants/fixtures";
import { RestaurantPage, RestaurantPage2 } from "./pages/RestaurantPage/RestaurantPage";

export const App = () => {
  return (
    <div>
      <RestaurantPage restaurants={restaurants} />
      <RestaurantPage2 restaurants={restaurants} />
    </div>
  );
};
