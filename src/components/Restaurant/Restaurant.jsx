import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { Tabs } from "../Tabs/Tabs";
import { Outlet } from "react-router-dom";

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }

  const restaurantTabs = [{title: 'Menu', id:'menu'}, {title: 'Reviews', id:'reviews'}];

  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Tabs tabs={restaurantTabs} />
      <Outlet />
    </div>
  );
};