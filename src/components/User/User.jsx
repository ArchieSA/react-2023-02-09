import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../../store/entities/user/selector'

const User = ({userId}) => {
    const user = useSelector((state) => selectUserById(state, {userId}));

    const { name } = user;
    
    return (
        <div>{name}</div>
    )
}

export default User;

