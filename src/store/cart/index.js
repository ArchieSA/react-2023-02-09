import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        incrementDish: (state, {payload}) => {
            state[payload] = state[payload] ? state[payload] + 1 : 1
        },
        decrementDish: (state, {payload}) => {
            state[payload] = state[payload] !== 0 ? state[payload] - 1 : 0
            if (state[payload] === 0)  delete state[payload]
        },
    }
})

export const {incrementDish, decrementDish} = carSlice.actions