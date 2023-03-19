import React from 'react';
import {selectUserById} from "../../store/entities/user/selectors";
import {useSelector} from "react-redux";

export const User = ({userId}) => {
  const user = useSelector((state) => selectUserById(state, {userId}));
  const {name} = user;

  return (
    <div>
      {name}
    </div>
  );
};