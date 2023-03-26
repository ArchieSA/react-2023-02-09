import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadUserIfNotExist } from "./thunks/loadUsersIfNotExist";

export const userEntityAdapter = createEntityAdapter();
export const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(loadUserIfNotExist.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(loadUserIfNotExist.fulfilled, (state, { payload }) => {
        state.status = REQUEST_STATUSES.success;
        userEntityAdapter.setMany(state, payload);
      }),
});
