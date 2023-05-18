import { normalizedUsers } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedUsers.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const userReducer = (state = initialState, action) => state;