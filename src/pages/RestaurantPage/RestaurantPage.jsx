import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../../components/Cart/Cart";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { RestaurantTabs } from "../../containers/RestaurantTabs/RestaurantTabs";
import { restaurantActions } from "../../store/entities/restaurant";
import {
  selectIsRestaurantLoaded,
  selectIsRestaurantLoading,
  selectRestaurantIds,
} from "../../store/entities/restaurant/selectors";
import { userActions } from "../../store/entities/user";

import styles from "./styles.module.css";

export const RestaurantPage = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  useEffect(() => {
    dispatch(userActions.loadUsers());
  }, []);

  const isLoading = useSelector(selectIsRestaurantLoading);
  const isLoaded = useSelector(selectIsRestaurantLoaded);

  useEffect(() => {
    dispatch(restaurantActions.loadRestaurantIfNotExist());
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setActiveRestaurantId(restaurantIds[0]);
    }
  }, [isLoaded]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.root}>
      <div>
        <RestaurantTabs activeId={activeRestaurantId} onTabClick={setActiveRestaurantId} />
        {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
      </div>
      <Cart />
    </div>
  );
};
