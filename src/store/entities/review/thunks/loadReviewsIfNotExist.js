import { reviewSlice } from "..";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviews } from "../selectors";

export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {
  const state = getState();

  const reviewsIds = selectRestaurantReviewsById(state, { restaurantId });
  const reviews = selectReviews(state);

  const reviewsExist = reviewsIds.every(reviewId => !!reviews.find(r => r.id === reviewId));

  if (reviewsExist) {
    return;
  }

  dispatch(reviewSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
    .then(data => data.json())
    .then(reviews => dispatch(reviewSlice.actions.successLoading(reviews)))
    .catch(() => dispatch(reviewSlice.actions.failLoading()));
}
