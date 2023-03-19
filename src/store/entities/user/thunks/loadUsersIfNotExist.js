import { finishLoadingUsers,failLoadingUsers, startLoadingUsers } from "../actions"
import { selectUserIds } from "../selectors"

export const loadUsersIfNotExist = () => (dispatch, getState) => {
    const userList = selectUserIds(getState())

    if(userList.lenght) return

    dispatch(startLoadingUsers())
    fetch('http://localhost:3001/api/users/')
    .then(res=> res.json())
    .then(users => dispatch(finishLoadingUsers(users)))
    .catch(()=> dispatch(failLoadingUsers()))
}