export const selectUserModule = (state) => state.user;

export const selectUserById = (state, { userId }) => {
  return selectUserModule(state).entities[userId]
};

export const selectUsers = (state) => Object.values(selectUserModule(state));
