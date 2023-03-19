import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = REQUEST_STATUSES.pending;
    },
    successLoading: (state, { payload }) => {
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, review) => {
          acc[review.id] = review;

          return acc;
        }, {})
      };
      state.ids = payload.map(review => review.id);
      state.status = REQUEST_STATUSES.success
    },
    failLoading: (state) => state.status = REQUEST_STATUSES.failed
  }
});
