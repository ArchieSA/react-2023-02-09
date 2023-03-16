import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "../../store/entities/users/selector";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  const { name } = user;
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};
