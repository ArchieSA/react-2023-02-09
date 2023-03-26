import { userSlice } from "..";
import { selectUserIds } from "../selectors";

export const loadUserIfNotExist = () => (dispatch, getState) => {
  const userIds = selectUserIds(getState());

  if (userIds.length) {
    return;
  }

  dispatch(userSlice.actions.startLoading());
  fetch("http://localhost:3001/api/users/")
    .then((response) => response.json())
    .then((users) =>
      dispatch(userSlice.actions.finishLoading(users))
    )
    .catch(() => dispatch(userSlice.actions.failLoading()));
};
