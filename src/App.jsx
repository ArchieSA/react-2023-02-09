import React from "react";
import { restaurants } from "./constants/fixtures";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";

export const App = () => {
  return (
    <>
      <RestaurantPage restaurants={restaurants} />
    </>
  );
};
