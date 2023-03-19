import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDishLoading } from "../../store/entities/dish/selectors";
import { loadDishesIfNotExist } from "../../store/entities/dish/thunks/loadDishesIfNotExist";
import { selectRestaurantMenuById } from "../../store/entities/restaurant/selectors";
import { Dish } from "../Dish/Dish";

import styles from "./styles.module.css";

export const Menu = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(loadDishesIfNotExist(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h3>Menu</h3>
      <div className={styles.dishes}>
        {menu.map((dishId) => (
          <Dish dishId={dishId} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};