import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { initialEntitiesState } from "../index";

export const userSlice = createSlice({
  name: "user",
  initialState: initialEntitiesState,
  reducers: {
    startLoading: (state) => {
      state.status = REQUEST_STATUSES.pending;
    },
    failLoading: (state) => {
      state.status = REQUEST_STATUSES.failed;
    },
    finishLoading: (state, { payload }) => {
      state.entities = payload.reduce((acc, user) => {
        acc[user.id] = user;

        return acc;
      }, {});
      state.ids = payload.map(({ id }) => id);
      state.status = REQUEST_STATUSES.success;
    },
  },
});
