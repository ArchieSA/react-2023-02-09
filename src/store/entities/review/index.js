import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";

const initialState = {
  entities:[],
  ids: [],
  status: REQUEST_STATUSES.idle 
};

export const reviewSlice = createSlice({
  initialState,
  name: 'review',
  reducers: {
    startLoading: (state) => {state.status = REQUEST_STATUSES.pending},
    finishLoading: (state, {payload}) => {
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, review)=> {
        acc[review.id] = review
        return acc
      },{})}

      state.ids = Array.from( new Set([...state.ids, ...payload.map(({ id }) => id)]))
      state.status = REQUEST_STATUSES.success
    },
    fialLoading: (state)=> {state.status = REQUEST_STATUSES.failed}
  }
})
