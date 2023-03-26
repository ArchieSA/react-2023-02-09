import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadDishesIfNotExist } from "./thunks/loadDishesIfNotExist";

export const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({status: REQUEST_STATUSES.idle}),
  extraReducers: (build) => build.addCase(loadDishesIfNotExist.pending, (state) => {
    state.status = REQUEST_STATUSES.pending;
  })
  .addCase(loadDishesIfNotExist.rejected, (state, { payload }) => {
    state.status =
      payload === REQUEST_STATUSES.earlyLoaded
        ? REQUEST_STATUSES.success
        : REQUEST_STATUSES.failed;
  })
  .addCase(loadDishesIfNotExist.fulfilled, (state, { payload }) => {
    dishEntityAdapter.setMany(state, payload);
    state.status = REQUEST_STATUSES.success;
  }),
});

export const dishActions = dishSlice.actions;
