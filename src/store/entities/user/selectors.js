export const selectUserModule = (state) => state.user;

export const selectUserById = (state, { userId }) =>
  selectUserModule(state).entities[userId];

export const selectUsers = (state) =>
  Object.values(selectUserModule(state).entities);