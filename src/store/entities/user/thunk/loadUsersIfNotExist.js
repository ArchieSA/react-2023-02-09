import { userActions } from "..";
import { selectRestaurantUsersById } from "../../restaurant/selectors";
import { selectUserIds } from "../selectors";

export const loadUsersIfNotExist = (restaurantId) => (dispatch, getState) => {
    const state = getState();
    const restaurantReviewsIds = selectRestaurantUsersById(state, { restaurantId });
    const reviewIds = selectUserIds(state);
  
    if (restaurantReviewsIds?.every((id) => reviewIds?.includes(id))) {
      return;
    }
  
    dispatch(userActions.startLoading());

    fetch(`http://localhost:3001/api/users?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((users) => dispatch(userActions.finishLoading(users)))
      .catch(() => dispatch(userActions.failLoading()));
  };
  