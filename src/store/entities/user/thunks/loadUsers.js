import { userActions } from ".."

export const loadUsers = () => (dispatch, getState) => {
  dispatch(userActions.startLoading);

  fetch('http://localhost:3001/api/users/')
    .then(data => data.json())
    .then(users => dispatch(userActions.successLoading(users)))
    .catch(() => dispatch(userActions.failLoading()));
}
