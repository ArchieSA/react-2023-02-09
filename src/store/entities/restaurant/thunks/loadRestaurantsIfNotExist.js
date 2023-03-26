import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/statuses";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantIfNotExist = createAsyncThunk(
  "restaurant",
  async (_, { getState, rejectWithValue }) => {
    const restaurantIds = selectRestaurantIds(getState());

    if (restaurantIds.length) {
      return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
    }

    const response = await fetch("http://localhost:3001/api/restaurants/");

    return await response.json();
  }
);
