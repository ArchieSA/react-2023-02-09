import { restaurantActions } from "..";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== restaurantActions.loadRestaurantsAction.type) {
    return next(action);
  }

  const restaurantIds = selectRestaurantIds(store.getState());

  if (restaurantIds.length) {
    return;
  }

  store.dispatch(restaurantActions.startLoading());
  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
      store.dispatch(restaurantActions.finishLoading(restaurants))
    )
    .catch(() => store.dispatch(restaurantActions.failLoading()));
};
