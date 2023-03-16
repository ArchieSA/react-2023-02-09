export const selectCartModule = (state) => state.cart;

export const selectCartDishById = (state, { dishId }) =>
  selectCartModule(state)[dishId] || 0

export const selectCartEntries = (state) =>
  Object.entries(selectCartModule(state));
