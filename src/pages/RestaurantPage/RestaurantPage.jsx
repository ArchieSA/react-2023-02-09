import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantTabs } from "../../containers/RestaurantTabs/RestaurantTabs";
import { loadRestaurantIfNotExist } from "../../store/entities/restaurant/thunks/loadRestaurantsIfNotExist";
import {
  selectIsRestaurantLoading,
} from "../../store/entities/restaurant/selectors";

import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

export const RestaurantPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsRestaurantLoading);

  useEffect(() => {
    dispatch(loadRestaurantIfNotExist());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.root}>
      <div>
        <RestaurantTabs />
        <Outlet />
      </div>
    </div>
  );
};
