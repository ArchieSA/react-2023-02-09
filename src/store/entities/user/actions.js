export const USER_ACTIONS = {
  startLoading: "user/startLoading",
  finishLoading: "user/finishLoading",
  failLoading: "user/failLoading",
};

export const startLoadUsers = () => ({
  type: USER_ACTIONS.startLoading,
});
export const finishLoadingUsers = (user) => ({
  type: USER_ACTIONS.finishLoading,
  payload: user,
});
export const failLoadingUsers = () => ({
  type: USER_ACTIONS.failLoading,
});
