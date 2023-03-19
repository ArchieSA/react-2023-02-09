import { selectUserIds } from "../selectors";
import {
  failLoadingUsers,
  finishLoadingUsers
} from "../actions";

export const loadUserIfNotExist = () => (dispatch, getState) => {
  
  const state = getState();
  const userIds = selectUserIds(state);

  if (userIds.length) {
    return;
  }


  fetch(`http://localhost:3001/api/users/`)
    .then((response) => response.json())
    .then((users) => dispatch(finishLoadingUsers(users)))
    .catch(() => dispatch(failLoadingUsers()));

};
