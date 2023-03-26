import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectCountDishesByRestaurants } from "../../restaurant/selectors";
import { selectDishTotal } from "../selectors";

export const loadAllDishesIfNotExist = createAsyncThunk(
  "dish/getAll",
  async () => {
    const response = await fetch(`http://localhost:3001/api/products`);
    return await response.json();
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const loadedDishes = selectDishTotal(state);
      const countDishesByRest = selectCountDishesByRestaurants(state);
      return (
        !loadedDishes || !countDishesByRest || loadedDishes < countDishesByRest
      );
    },
  }
);
