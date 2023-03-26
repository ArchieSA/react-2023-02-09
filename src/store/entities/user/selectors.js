import { userEntityAdapter } from "./index";

export const selectUserModule = (state) => state.user;
const userSelectors = userEntityAdapter.getSelectors(selectUserModule);
export const selectUserById = (state, { userId }) =>
  userSelectors.selectById(state, userId);

export const selectUserIds = userSelectors.selectIds;
export const selectUserTotal = userSelectors.selectTotal;

export const selectUsers = (state) => userSelectors.selectEntities;
