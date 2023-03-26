import { userSlice } from "..";
import { selectUserIds, selectUserTotal } from "../selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../../restaurant/selectors";

export const loadUserIfNotExist = createAsyncThunk(
  "user",
  async () => {
    const response = await fetch(`http://localhost:3001/api/users/`);
    return await response.json();
  },
  {
    condition: (_, { getState }) => !selectUserTotal(getState()),
  }
);
