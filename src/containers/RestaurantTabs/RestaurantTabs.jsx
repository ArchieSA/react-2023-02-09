import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Tabs } from "../../components/Tabs/Tabs";
import { selectRestaurantsFilteredByName } from "../../store/entities/restaurant/selectors";

export const RestaurantTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const selectRestaurantsFilteredByName = useCallback(
  //   createSelectRestaurantsFilteredByName(),
  //   []
  // );

  const restaurants = useSelector((state) =>
    selectRestaurantsFilteredByName(state, {
      searchValue: searchParams.get("search") || "",
    })
  );

  const restaurantTabs = restaurants.map(({ id, name }) => ({
    id,
    title: name,
  }));
  return (
    <div>
      <input
        value={searchParams.get("search") || ""}
        onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      <Tabs tabs={restaurantTabs} />
    </div>
  );
};
