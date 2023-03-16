import React from "react";
import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/entities/user/selectors'

export const User = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, {userId}));
    console.log('user: ', user)
    if (!user) {
        return null;
    }

    return (
        <div>{ user.name }</div>
    )
}