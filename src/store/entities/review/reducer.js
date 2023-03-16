import { normalizedReviews } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedReviews.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewReducer = (state = initialState, action) => state;
