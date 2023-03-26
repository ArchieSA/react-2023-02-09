import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadReviewsIfNotExist = createAsyncThunk(
  "review",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviewsIds = selectRestaurantReviewsById(state, {
        restaurantId,
      });

      const reviewsIds = selectReviewIds(state);
      return !restaurantReviewsIds.every((id) => reviewsIds.includes(id));
    },
  }
);
