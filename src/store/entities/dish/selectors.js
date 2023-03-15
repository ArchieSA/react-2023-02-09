export const selectDishModule = (state) => state.dish;

export const selectDishById = (state, { dishId }) =>
selectDishModule(state).entities[dishId];

export const selecDishes = (state) =>
  Object.values(selectDishModule(state).entities);