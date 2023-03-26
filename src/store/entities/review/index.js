import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadReviewsIfNotExist } from "./thunks/loadReviewsIfNotExist";

const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState({status: REQUEST_STATUSES.idle}),
  extraReducers: (build) => build.addCase(loadReviewsIfNotExist.pending, (state) => {
    state.status = REQUEST_STATUSES.pending;
  })
  .addCase(loadReviewsIfNotExist.rejected, (state, { payload }) => {
    state.status =
      payload === REQUEST_STATUSES.earlyLoaded
        ? REQUEST_STATUSES.success
        : REQUEST_STATUSES.failed;
  })
  .addCase(loadReviewsIfNotExist.fulfilled, (state, { payload }) => {
    reviewEntityAdapter.setMany(state, payload);
    state.status = REQUEST_STATUSES.success;
  }),
});

export const reviewActions = reviewSlice.actions;
