import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";

const initialState = {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
  };

export const disheSlice = createSlice({
    name: "dish",
    initialState,
    reducers:{
        startLoading: (state) => {
            state.status = REQUEST_STATUSES.pending;
        },
        failLoading: (state) => {
            state.status = REQUEST_STATUSES.failed;
        },
        finishLoading: (state, { payload }) => {
            state.entities = payload.reduce((acc, dish) => {
                acc[dish.id] =  dish
                return acc;
            }, {});
            state.ids = Array.from(new Set(payload.map(({ id }) => id)));
            state.status = REQUEST_STATUSES.success;
        }
    }
});


export const dishActions = {
    ...disheSlice.actions,
};
