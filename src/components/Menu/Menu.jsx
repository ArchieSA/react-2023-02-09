import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectIsDishLoading } from "../../store/entities/dish/selectors";
import { loadRestaurantDishesIfNotExist } from "../../store/entities/dish/thunks/loadRestaurantDishesIfNotExist";
import { selectRestaurantMenuById } from "../../store/entities/restaurant/selectors";
import { Button } from "../Button/Button";

import styles from "./styles.module.css";
import { DishCount } from "../DishCount/DishCount";

export const Menu = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const menu = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsDishLoading);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadRestaurantDishesIfNotExist(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h3>Menu</h3>
      <div className={styles.dishes}>
        {menu.map((dishId) => (
          <DishCount dishId={dishId} className={styles.dish} />
        ))}
      </div>
      <Button onClick={() => navigate("/cart")}>Перейти к заказу</Button>
    </div>
  );
};
