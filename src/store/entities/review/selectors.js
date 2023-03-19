import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);

export const selectReviewLoadingStatus = (state) =>
  selectReviewModule(state).status;

export const selectIsReviewLoading = (state) =>
  selectReviewLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsReviewLoaded = (state) =>
  selectReviewLoadingStatus(state) === REQUEST_STATUSES.success;
