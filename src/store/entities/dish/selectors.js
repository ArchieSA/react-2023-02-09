import { dishEntityAdapter } from ".";
import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectDishModule = (state) => state.dish;
const dishSelectors = dishEntityAdapter.getSelectors(selectDishModule);

export const selectDishById = (state, { dishId }) =>
  dishSelectors.selectById(state, dishId);
export const selectDishIds = dishSelectors.selectIds;
export const selectDishTotal = dishSelectors.selectTotal;
export const selectDishes = dishSelectors.selectAll;
export const selectDishEntities = dishSelectors.selectEntities;

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).status;

export const selectDishByName = (state, { searchName = "" }) =>
  selectDishes(state).filter(({ name }) =>
    name.toLowerCase().includes(searchName.toLowerCase())
  );

export const selectIsDishLoading = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsDishLoaded = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUSES.success;
