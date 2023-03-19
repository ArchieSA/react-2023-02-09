import { userActions } from '../';
import { selectUsers } from '../selectors';

export const loadUsersIfNotExist = () => (dispatch, getState) => {
  const users = selectUsers(getState());

  if (users.length) {
    return;
  }

  dispatch(userActions.startLoading());
  fetch("http://localhost:3001/api/users/")
    .then((response) => response.json())
    .then((user) => dispatch(userActions.finishLoading(user)))
    .catch(() => dispatch(userActions.failLoading()));
};
