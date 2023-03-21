import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { restaurantSlice } from "./entities/restaurant";

import { logger } from "./middleware/logger";
import { cartSlice } from "./cart";
import { dishSlice } from "./entities/dish";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { REQUEST_STATUSES } from "../constants/statuses";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
