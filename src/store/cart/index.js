import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers:{
        incrementDish: (state, {payload}) => {
            state[payload] = state[payload] ? state[payload] + 1 : 1;
        },
        decrementDish: (state, {payload}) => {
            state[payload] = state[payload] === 0 ? 0 : state[payload] - 1;
        }
    }
});

export const cardActions = {
    ...cardSlice.actions
}
