import { startLoadingRestaurants, finishLoadingRestaurants, failLoadingRestaurants } from "../actions";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantsIfNotExist = () => (dispatch, getState) => {

  const restaurantIds = selectRestaurantIds(getState());

  if (restaurantIds.length)  return

  dispatch(startLoadingRestaurants());
  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
    dispatch(finishLoadingRestaurants(restaurants))
    )
    .catch(() => dispatch(failLoadingRestaurants()));
};
