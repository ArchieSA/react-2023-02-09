import { dishActions } from "..";
import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { selectDishIds } from "../selectors";

export const loadDishesIfNotExist = (restaurantId) => (dispatch, getState) => {
  const state = getState();

  const restaurantDishIds = selectRestaurantMenuById(state, { restaurantId });
  const dishIds = selectDishIds(state);
  console.log("restaurantDishIds", restaurantDishIds);
  console.log("dishIds", dishIds);

  if (restaurantDishIds.every((id) => dishIds.includes(id))) {
    return;
  }

  dispatch(dishActions.startLoading());

  fetch(`http://localhost:3001/api/products?restaurantId=${restaurantId}`)
    .then((response) => response.json())
    .then((dishes) => dispatch(dishActions.finishLoading(dishes)))
    .catch(() => dispatch(dishActions.failLoading()));
};
