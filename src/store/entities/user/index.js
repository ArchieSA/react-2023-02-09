import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadUserIfNotExist } from "./thunks/loadUsersIfNotExist";

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({status: REQUEST_STATUSES.idle}),
  extraReducers: (build) => build.addCase(loadUserIfNotExist.pending, (state) => {
    state.status = REQUEST_STATUSES.pending;
  })
  .addCase(loadUserIfNotExist.rejected, (state, { payload }) => {
    state.status =
      payload === REQUEST_STATUSES.earlyLoaded
        ? REQUEST_STATUSES.success
        : REQUEST_STATUSES.failed;
  })
  .addCase(loadUserIfNotExist.fulfilled, (state, { payload }) => {
    userEntityAdapter.setAll(state, payload);
    state.status = REQUEST_STATUSES.success;
  }),
});