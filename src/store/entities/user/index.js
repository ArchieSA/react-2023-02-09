import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadUsers } from './thunks/loadUsers'

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoading: state => state.status = REQUEST_STATUSES.pending,
    failLoading: state => state.status = REQUEST_STATUSES.failed,
    successLoading: (state, { payload }) => {
      state.entities = payload.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      state.ids = payload.map(user => user.id);
      state.status = REQUEST_STATUSES.success;
    },
  }
});

export const userActions = {
  ...userSlice.actions,
  loadUsers,
};
