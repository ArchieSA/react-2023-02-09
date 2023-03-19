export const USER_ACTIONS = {
    startLoading: "user/startLoading",
    finishLoading: "user/finishLoading",
    failLoading: "user/failLoading",
  };
  
  export const startLoadingUsers = () => ({
    type: USER_ACTIONS.startLoading,
  });
  export const finishLoadingUsers = (users) => ({
    type: USER_ACTIONS.finishLoading,
    payload: users,
  });
  export const failLoadingUsers = () => ({
    type: USER_ACTIONS.failLoading,
  });
  