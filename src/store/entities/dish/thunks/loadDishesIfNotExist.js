import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/statuses";
import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { selectDishIds } from "../selectors";


export const loadDishesIfNotExist = createAsyncThunk(
  "dishes",
  async(restaurantId, {getState, rejectWithValue})=> {

    const restaurantDishIds = selectRestaurantMenuById(getState(), { restaurantId });
    const dishIds = selectDishIds(getState());
      if (restaurantDishIds.every((id) => dishIds.includes(id))) {
        return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
      }

    const response = await fetch(`http://localhost:3001/api/products?restaurantId=${restaurantId}`);
    return await response.json();
  }
  );