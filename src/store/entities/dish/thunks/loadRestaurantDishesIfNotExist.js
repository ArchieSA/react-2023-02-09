import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { selectDishIds, selectIsDishLoading } from "../selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadRestaurantDishesIfNotExist = createAsyncThunk(
  "dish/getByRestaurant",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/products?restaurantId=${restaurantId}`
    );
    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectRestaurantMenuById(state, {
        restaurantId,
      });
      const dishIds = selectDishIds(state);
      return (
        !restaurantDishIds.every((id) => dishIds.includes(id)) &&
        !selectIsDishLoading(state)
      );
    },
  }
);
