import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, { userId }) =>
  selectUserModule(state).entities[userId];

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUsers = (state) =>
  Object.values(selectUserModule(state).entities);

export const selectUsersIsLoading = (state) => selectUserModule(state).status === REQUEST_STATUSES.pending;
