import { reviewActions } from "..";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";

export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {
  const state = getState();

  const restaurantReviewIds = selectRestaurantReviewsById(state, { restaurantId });
  const reviewIds = selectReviewIds(state);

  if (restaurantReviewIds.every((id) => reviewIds.includes(id))) {
    return;
  }

  dispatch(reviewActions.startLoading());

  fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
    .then((response) => response.json())
    .then((reviews) => dispatch(reviewActions.finishLoading(reviews)))
    .catch(() => dispatch(reviewActions.failLoading()))
}
