import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadRestaurantIfNotExist } from "./thunks/loadRestaurantsIfNotExist";

const restaurantEntityAdapter = createEntityAdapter();

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
      .addCase(loadRestaurantIfNotExist.rejected, (state, { payload }) => {
        state.status =
          payload === REQUEST_STATUSES.earlyLoaded
            ? REQUEST_STATUSES.success
            : REQUEST_STATUSES.failed;
      })
      .addCase(loadRestaurantIfNotExist.fulfilled, (state, { payload }) => {
        restaurantEntityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUSES.success;
      }),
});
