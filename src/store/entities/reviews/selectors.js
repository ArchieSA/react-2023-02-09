export const selectReviewsModule = (state) => state.reviews;

export const selectReviewById = (state, { reviewId }) => selectReviewsModule(state).entities[reviewId];