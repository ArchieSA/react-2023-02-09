import { restaurantActions } from "..";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantIfNotExist = () => (dispatch, getState) => {
  const restaurantIds = selectRestaurantIds(getState());

  if (restaurantIds.length) {
    return;
  }

  dispatch(restaurantActions.startLoading());

  fetch("http://localhost:3001/api/restaurants/")
  .then((response) => response.json())
  .then((restaurants) => dispatch(restaurantActions.finishLoading(restaurants)))
  .catch(() => dispatch(restaurantActions.failLoading()));
}
