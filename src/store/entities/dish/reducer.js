import { normalizedProducts } from "../../../constants/normalized-fixtures";
const initialState = {
  entities: normalizedProducts.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {}),
  ids: normalizedProducts.map(({ id }) => id),
};
console.log(initialState);
export const dishReducer = (state = initialState, action) => state;
