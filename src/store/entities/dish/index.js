import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadRestaurantDishesIfNotExist } from "./thunks/loadRestaurantDishesIfNotExist";
import { loadAllDishesIfNotExist } from "./thunks/loadAllDishesIfNotExist";
import { loadDishIfNotExist } from "./thunks/loadDishIfNotExist";

export const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(loadRestaurantDishesIfNotExist.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(
        loadRestaurantDishesIfNotExist.fulfilled,
        (state, { payload }) => {
          state.status = REQUEST_STATUSES.success;
          dishEntityAdapter.setMany(state, payload);
        }
      )
      .addCase(loadAllDishesIfNotExist.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(loadAllDishesIfNotExist.fulfilled, (state, { payload }) => {
        state.status = REQUEST_STATUSES.success;
        dishEntityAdapter.setMany(state, payload);
      })
      .addCase(loadDishIfNotExist.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(loadDishIfNotExist.fulfilled, (state, { payload }) => {
        state.status = REQUEST_STATUSES.success;
        dishEntityAdapter.setOne(state, payload);
      });
  },
});
