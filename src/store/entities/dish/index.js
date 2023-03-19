import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const dishSlice = createSlice({
  initialState,
  name: 'dish',
  reducers: {
    startLoading: (state)=> {state.status = REQUEST_STATUSES.pending},

    finishLoading:(state, {payload})=>  {
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, dish) => {
          acc[dish.id] = dish;
          return acc;
        }, {})
      }
        state.ids = Array.from(new Set([...state.ids, ...payload.map(({ id }) => id)]))
        state.status = REQUEST_STATUSES.success
    },
    failLoading: (state)=> state.statusREQUEST_STATUSES.failed
  }
})