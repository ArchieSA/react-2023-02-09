import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { initialEntitiesState } from "../index";

export const reviewSlice = createSlice({
  name: "review",
  initialState: initialEntitiesState,
  reducers: {
    startLoading: (state) => {
      state.status = REQUEST_STATUSES.pending;
    },
    failLoading: (state) => {
      state.status = REQUEST_STATUSES.failed;
    },
    finishLoading: (state, { payload }) => {
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, review) => {
          acc[review.id] = review;
          return acc;
        }, {}),
      };
      state.ids = Array.from(
        new Set([...state.ids, ...payload.map(({ id }) => id)])
      );
      state.status = REQUEST_STATUSES.success;
    },
  },
});
