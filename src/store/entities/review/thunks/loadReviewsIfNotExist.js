import { createAsyncThunk } from "@reduxjs/toolkit";
// import { reviewSlice } from "..";
import { REQUEST_STATUSES } from "../../../../constants/statuses";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const loadReviewsIfNotExist = createAsyncThunk(
  "reviews",
  async(restaurantId, {getState, rejectWithValue})=> {

  const restaurantReviewIds = selectRestaurantReviewsById(getState(), { restaurantId });
  const reviewIds = selectReviewIds(getState());
    if (restaurantReviewIds.every((id) => reviewIds.includes(id))) {
      return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
    }
    
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    return await response.json();
  }
  );