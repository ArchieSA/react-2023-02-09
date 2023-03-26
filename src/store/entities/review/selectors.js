import { REQUEST_STATUSES } from "../../../constants/statuses";
import { reviewEntityAdapter } from "./index";

export const selectReviewModule = (state) => state.review;
const reviewSelectors = reviewEntityAdapter.getSelectors(selectReviewModule);
export const selectReviewById = (state, { reviewId }) =>
  reviewSelectors.selectById(state, reviewId);

export const selectReviewIds = reviewSelectors.selectIds;

export const selectReviews = reviewSelectors.selectEntities;

export const selectReviewLoadingStatus = (state) =>
  selectReviewModule(state).status;

export const selectIsReviewLoading = (state) =>
  selectReviewLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsReviewLoaded = (state) =>
  selectReviewLoadingStatus(state) === REQUEST_STATUSES.success;
