import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";

export const loadDishIfNotExist = createAsyncThunk(
  "dish/getById",
  async (dishId) => {
    const response = await fetch(
      `http://localhost:3001/api/products?productId=${dishId}`
    );
    return await response.json();
  },
  {
    condition: (dishId, { getState }) =>
      !selectDishIds(getState()).includes(dishId),
  }
);
