import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart/reducer";
import { dishReducer } from "./entities/dish/reducer";
import { restaurantReducer } from "./entities/restaurant/reducer";
import { reviewReducer } from "./entities/reviews/reducer";
import { userReducer } from "./entities/user/reducer";

// const rootReducer = (state = {}, action = {}) => {
//   return {
//     cart: cartReducer(state.cart, action),
//     restaurant: restaurantReducer(state.restaurant, action),
//   };
// };

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer
});

export const store = createStore(rootReducer);

console.log("state", store.getState());
