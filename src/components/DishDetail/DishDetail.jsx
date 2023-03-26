import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectDishById, selectIsDishLoading } from "../../store/entities/dish/selectors";
import { useParams, Link } from "react-router-dom";
import { loadAllDishesIfNotExist } from "../../store/entities/dish/thunks/loadAllDishesIfNotExist";
import { loadRestaurantIfNotExist } from "../../store/entities/restaurant/thunks/loadRestaurantsIfNotExist";
import { selectRestaurantIDsByDish } from "../../store/entities/restaurant/selectors";

export const DishDetail = () => {
  
  const { dishId } = useParams();

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsDishLoading);

  const dish = useSelector((state) => selectDishById(state, { dishId }));

  const restaraunts = useSelector((state) => selectRestaurantIDsByDish(state, { dishId }));

  useEffect(() => {
    dispatch(loadAllDishesIfNotExist());
  }, []);

  useEffect(() => {
    dispatch(loadRestaurantIfNotExist());
  }, []);


  if (isLoading) {
    return <span>Loading...</span>;
  }
  
  if (!dish || !restaraunts) {
    return null;
  }

  const { name, price } = dish;

  return (
    <div>
      <div className={styles.dish}>
        <div className={styles.title}>
          <span>{name}</span>-<span>{price}</span>
          {restaraunts.map(({name, id}) => (
          <p><Link to={`/restaurants/${id}`}>{name}</Link></p>
        ))}
        </div>
      </div>
    </div>
  );
};