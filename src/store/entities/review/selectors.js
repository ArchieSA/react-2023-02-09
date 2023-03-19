import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);

export const selectReviewsStatus = (state) => selectReviewModule(state).status;

export const selectReviewIsLoading = (state) => selectReviewsStatus(state) === REQUEST_STATUSES.pending;
