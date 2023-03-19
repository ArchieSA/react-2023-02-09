import React from "react";
import { useSelector } from "react-redux";
import { selectUserById, selectUsersIsLoading } from "../../store/entities/user/selectors";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  const isUsersLoading = useSelector(selectUsersIsLoading);

  if (isUsersLoading) {
    return <span>...Loading</span>;
  }

  return <div>{user.name}</div>;
};
