export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) => {
  return selectReviewModule(state).entities[reviewId]
};

export const selectReviews = (state) => Object.values(selectReviewModule(state));
