import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadReviewsIfNotExist } from "./thunks/loadReviewsIfNotExist";

export const reviewEntityAdapter = createEntityAdapter();
export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(loadReviewsIfNotExist.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(loadReviewsIfNotExist.fulfilled, (state, { payload }) => {
        reviewEntityAdapter.setMany(state, payload);
        state.status = REQUEST_STATUSES.success;
      });
  },
});
