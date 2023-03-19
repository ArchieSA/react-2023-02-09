import React from "react";
import { useSelector } from "react-redux";
import { selectIsUserLoading, selectUserById } from "../../store/entities/user/selectors";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));
  const isLoading = useSelector(selectIsUserLoading);
  
  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <div>{user?.name}</div>;
};
