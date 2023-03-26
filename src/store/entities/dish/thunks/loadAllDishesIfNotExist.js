import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/statuses";
import { selectDishIds } from "../selectors";


export const loadAllDishesIfNotExist = createAsyncThunk(
  "dishes",
  async(_, {getState, rejectWithValue})=> {

    const dishIds = selectDishIds(getState());

      if (dishIds.length) {
        return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
      }

    const response = await fetch(`http://localhost:3001/api/products`);
    return await response.json();
  }
  );