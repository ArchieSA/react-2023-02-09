export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);

export const selectReviewUserById = (state, { reviewId }) =>
selectReviewById(state, { reviewId })?.userId;
