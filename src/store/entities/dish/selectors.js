import { createSelector } from "@reduxjs/toolkit";
import { dishEntityAdapter } from ".";
import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectDishModule = (state) => state.dish;
const dishSelectors = dishEntityAdapter.getSelectors(selectDishModule);

export const selectDishById = (state, { dishId }) => {
  console.log(dishId, state);
 return selectDishModule(state).entities[dishId];
}


export const selectDishEntities = (state) =>
selectDishModule(state).entities;

export const selectDishesFilteredByName = createSelector(
  [selectDishEntities, (_, { searchValue }) => searchValue],
  (entities, searchValue) => {
    return Object.values(entities).filter(
      ({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
  }
);

export const selectDishIds = dishSelectors.selectIds;
export const selectDishes = dishSelectors.selectAll;

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).status;

export const selectIsDishLoading = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsDishLoaded = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUSES.success;
