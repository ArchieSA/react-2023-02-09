export const selectDishModule = (state) => state.dish;

// export const selectRestaurantById = (state, { restaurantId }) =>
//   selectRestaurantModule(state).entities[restaurantId];

// export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

// export const selectRestaurants = (state) =>
//   Object.values(selectRestaurantModule(state).entities);

// export const selectRestaurantMenuById = (state, { restaurantId }) =>
//   selectRestaurantById(state, { restaurantId })?.menu;

export const selectDishById = (state, { dishId }) => {
  return selectDishModule(state).entities[dishId]; 
}

