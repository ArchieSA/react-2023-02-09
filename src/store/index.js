import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cardSlice } from "./cart";
import { disheSlice } from "./entities/dish";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { logger } from "./middleware/logger";

// const rootReducer = (state = {}, action = {}) => {
//   return {
//     cart: cartReducer(state.cart, action),
//     restaurant: restaurantReducer(state.restaurant, action),
//   };
// };

const rootReducer = combineReducers({
  cart: cardSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dish: disheSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(customThunk, logger, loadRestaurantIfNotExist)
// );

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([logger]),
});

console.log("state", store.getState());
