import React from "react";
import { useSelector } from "react-redux";
import { Tabs } from "../../components/Tabs/Tabs";
import { selectRestaurants } from "../../store/entities/restaurant/selectors";

export const RestaurantTabs = ({ onTabClick, activeId }) => {
  const restaurants = useSelector(selectRestaurants);

  const restaurantTabs = restaurants.map(({ id, name }) => ({
    id,
    title: name,
  }));
  return (
    <Tabs tabs={restaurantTabs} onTabClick={onTabClick} activeId={activeId} />
  );
};
