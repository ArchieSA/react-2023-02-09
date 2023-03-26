import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useMatch, useParams } from "react-router-dom";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { Tabs } from "../Tabs/Tabs";
import { RESTAURANT_TABS } from "./constants";

export const Restaurant = () => {
  const { restaurantId } = useParams();

  const matchRestaurant = useMatch("restaurants/:restaurantId");
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }
  if (matchRestaurant) {
    return <Navigate to={RESTAURANT_TABS.menu.id} replace />;
  }
  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Tabs tabs={Object.values(RESTAURANT_TABS)} />
      <Outlet />
    </div>
  );
};
