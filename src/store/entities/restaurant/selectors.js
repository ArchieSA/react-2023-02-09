import { REQUEST_STATUSES } from "../../../constants/statuses";
import { restaurantEntityAdapter } from "./index";

export const selectRestaurantModule = (state) => state.restaurant;
const restaurantSelects = restaurantEntityAdapter.getSelectors(
  selectRestaurantModule
);

export const selectRestaurantById = (state, { restaurantId }) =>
  restaurantSelects.selectById(state, restaurantId);

export const selectRestaurantIds = restaurantSelects.selectIds;
export const selectRestaurantTotal = restaurantSelects.selectTotal;

export const selectRestaurantsEntities = restaurantSelects.selectEntities;
export const selectRestaurantsAll = restaurantSelects.selectAll;

export const selectRestaurantsFilteredByName = (state, { searchValue }) =>
  Object.values(selectRestaurantModule(state).entities).filter(
    ({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

export const selectRestaurantByDishId = (state, { dishId }) =>
  selectRestaurantsAll(state).find(({ menu }) => menu.includes(dishId));
export const selectRestaurantMenuById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.menu;

export const selectRestaurantReviewsById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).status;

export const selectIsRestaurantLoading = (state) =>
  selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsRestaurantLoaded = (state) =>
  selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.success;

export const selectCountDishesByRestaurants = (state) => {
  return selectRestaurantsAll(state).reduce((acc, rest) => {
    acc += rest?.menu.length;
    return acc;
  }, 0);
};
