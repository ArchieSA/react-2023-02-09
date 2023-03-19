export const USER_ACTIONS = {
  startLoading: "restaraunt/startLoading",
  finishLoading: "restaraunt/finishLoading",
  failLoading: "restaraunt/failLoading",
};

export const startLoadRestaraunts = () => ({
  type: USER_ACTIONS.startLoading,
});
export const finishLoadingRestaraunts = (restaraunts) => ({
  type: USER_ACTIONS.finishLoading,
  payload: restaraunts,
});
export const failLoadingRestaraunts = () => ({
  type: USER_ACTIONS.failLoading,
});
