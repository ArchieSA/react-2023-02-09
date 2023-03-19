import { reviewActions } from "..";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {
  const state = getState();
  const restaurantReviewsIds = selectRestaurantReviewsById(state, { restaurantId });
  const reviewIds = selectReviewIds(state);

  if (restaurantReviewsIds?.every((id) => reviewIds?.includes(id))) {
    return;
  }

  dispatch(reviewActions.startLoading());

  fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
    .then((response) => response.json())
    .then((reviews) => dispatch(reviewActions.finishLoading(reviews)))
    .catch(() => dispatch(reviewActions.failLoading()));
};
