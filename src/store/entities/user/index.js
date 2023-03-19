import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = REQUEST_STATUSES.pending;
    },
    finishLoading: (state, { payload } ) => {
      state.entities = payload.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      state.ids = payload.map(({ id }) => id);
      state.status = REQUEST_STATUSES.success;
    },
    failLoading: (state) => {
      state.status = REQUEST_STATUSES.failed;
    },
  }
})

export const userActions = { ...userSlice.actions };
