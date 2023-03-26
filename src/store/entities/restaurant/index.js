import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadRestaurantIfNotExist } from "./thunks/loadRestaurantsIfNotExist";

export const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  extraReducers: (build) =>
    build
      .addCase(loadRestaurantIfNotExist.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(loadRestaurantIfNotExist.fulfilled, (state, { payload }) => {
        restaurantEntityAdapter.setMany(state, payload);
        state.status = REQUEST_STATUSES.success;
      }),
});
