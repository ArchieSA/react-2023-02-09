import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementDish: (state, { payload }) => void (state[payload] = state[payload] ? state[payload] + 1 : 1),
    decrementDish: (state, { payload }) => void (state[payload] = state[payload] ? state[payload] - 1 : 0),
  }
});
