import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../../components/Cart/Cart";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { RestaurantTabs } from "../../containers/RestaurantTabs/RestaurantTabs";
import {
  selectIsRestaurantLoaded,
  selectIsRestaurantLoading,
  selectRestaurantIds,
} from "../../store/entities/restaurant/selectors";
import { loadRestaurantsIfNotExist } from "../../store/entities/restaurant/thunks/loadRestaurantsIfNotExist";

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
  }, [dispatch]);

  useEffect(() => {
    if (isLoaded) {
      setActiveRestaurantId(restaurantIds[0]);
    }
  }, [isLoaded, restaurantIds]);

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
