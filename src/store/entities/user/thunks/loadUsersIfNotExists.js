import { selectUserIds } from "../selectors";
import { userSlice } from "../index";

export const loadUsersIfNotExists = (dispatch, getState) => {
  const state = getState();
  const usersIds = selectUserIds(state);

  if (usersIds.length) {
    return;
  }

  dispatch(userSlice.actions.startLoading());
  fetch("http://localhost:3001/api/users/")
    .then((response) => response.json())
    .then((users) => dispatch(userSlice.actions.finishLoading(users)))
    .catch(() => dispatch(userSlice.actions.failLoading()));
};
