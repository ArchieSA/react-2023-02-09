import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../../components/Cart/Cart";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { RestaurantTabs } from "../../containers/RestaurantTabs/RestaurantTabs";
import { loadRestaurantsIfNotExist } from "../../store/entities/restaurant/thunks/loadRestaurantsIfNotExist";
import { loadUsersIfNotExist } from "../../store/entities/user/thunk/loadUsersIfNotExist";
import {
  selectIsRestaurantLoaded,
  selectIsRestaurantLoading,
  selectRestaurantIds,
} from "../../store/entities/restaurant/selectors";

import styles from "./styles.module.css";

export const RestaurantPage = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );
  const isLoading = useSelector(selectIsRestaurantLoading);
  const isLoaded = useSelector(selectIsRestaurantLoaded);

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist());
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setActiveRestaurantId(restaurantIds[0]);
    }
  }, [isLoaded]);

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.root}>
      <div>
        <RestaurantTabs
          activeId={activeRestaurantId}
          onTabClick={setActiveRestaurantId}
        />
        {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
      </div>
      <Cart />
    </div>
  );
};
