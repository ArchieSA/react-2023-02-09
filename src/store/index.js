import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cartReducer } from './cart/reducer'
import { dishSlice } from './entities/dish'
import { dishReducer } from './entities/dish/reducer'
import { restaurantSlice } from './entities/restaurant'
import { loadRestaurantIfNotExist } from './entities/restaurant/middleware/loadRestaurantsIfNotExist'
import { restaurantReducer } from './entities/restaurant/reducer'
import { reviewSlice } from './entities/review'
import { reviewReducer } from './entities/review/reducer'
import { userSlice } from './entities/user'
import { userReducer } from './entities/user/reducer'
import { customThunk } from './middleware/customThunk'
import { logger } from './middleware/logger'

// const rootReducer = (state = {}, action = {}) => {
//   return {
//     cart: cartReducer(state.cart, action),
//     restaurant: restaurantReducer(state.restaurant, action),
//   };
// };

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
})

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(customThunk, logger, loadRestaurantIfNotExist)
// );

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
})
