import { normalizedProducts } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedProducts.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedProducts.map(({ id }) => id),
};

export const dishReducer = (state = initialState, action) => state;
