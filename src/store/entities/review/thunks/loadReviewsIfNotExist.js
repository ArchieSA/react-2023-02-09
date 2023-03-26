import { reviewSlice } from "..";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {
  const state = getState();

  const restaurantReviewIds = selectRestaurantReviewsById(state, { restaurantId });
  const reviewIds = selectReviewIds(state);

  if (restaurantReviewIds.every((id) => reviewIds.includes(id))) {
    return;
  }

  dispatch(reviewSlice.actions.startLoading());

  fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
    .then((response) => response.json())
    .then((reviews) => dispatch(reviewSlice.actions.finishLoading(reviews)))
    .catch(() => dispatch(reviewSlice.actions.failLoading()));
};
