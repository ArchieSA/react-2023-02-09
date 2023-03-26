import React, { useEffect } from "react";
import style from "./DishesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDishByName,
  selectDishes,
  selectDishIds,
  selectDishLoadingStatus,
  selectIsDishLoading,
  selectSearchDishByName,
} from "../../store/entities/dish/selectors";
import { loadAllDishesIfNotExist } from "../../store/entities/dish/thunks/loadAllDishesIfNotExist";
import { Dish } from "../../components/Dish/Dish";
import { DishLink } from "../../components/DishLink/DishLink";
import { Outlet, useSearchParams } from "react-router-dom";
import { loadRestaurantIfNotExist } from "../../store/entities/restaurant/thunks/loadRestaurantsIfNotExist";

export const DishesPage = () => {
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useSearchParams({ search: "" });

  const isLoading = useSelector(selectIsDishLoading);
  useEffect(() => {
    dispatch(loadAllDishesIfNotExist());
    dispatch(loadRestaurantIfNotExist());
  }, []);

  const dishes = useSelector((state) =>
    selectDishByName(state, {
      searchName: searchParam.get("search") || "",
    })
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.root}>
      <input
        value={searchParam.get("search") || ""}
        onChange={({ target }) => setSearchParam({ search: target.value })}
      />
      <h3>Dishes:</h3>

      {dishes.map(({ id }) => (
        <DishLink className={style.dish} dishId={id} />
      ))}
    </div>
  );
};
