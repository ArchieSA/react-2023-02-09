import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantTotal } from "../selectors";

export const loadRestaurantIfNotExist = createAsyncThunk(
  "restaurant",
  async (_, { getState }) => {
    const response = await fetch("http://localhost:3001/api/restaurants/");
    return await response.json();
  },
  {
    condition: (_, { getState }) => !selectRestaurantTotal(getState()),
  }
);
