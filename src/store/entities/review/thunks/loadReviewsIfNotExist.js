import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import {
  failLoadingReviews,
  finishLoadingReviews,
  startLoadReviews,
} from "../actions";
import { selectReviewIds } from "../selectors";
// import { selectDishIds } from "../selectors";

export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {
  const state = getState();

  const restaurantReviewIds = selectRestaurantReviewsById(state, { restaurantId });
  const reviewIds = selectReviewIds(state);

  if (restaurantReviewIds.every((id) => reviewIds.includes(id))) {
    return;
  }

  dispatch(startLoadReviews());

  fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
    .then((response) => response.json())
    .then((reviews) => dispatch(finishLoadingReviews(reviews)))
    .catch(() => dispatch(failLoadingReviews()));
};
