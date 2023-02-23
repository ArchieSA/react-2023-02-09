import React from 'react';
import {Button} from "../Button/Button";

export const Amount = ({ setCount, value }) => {
    return (
        <span>
            <Button onClick={()=> setCount(value + 1)}>+</Button>
            <span> {value} </span>
            <Button onClick={()=> setCount(value - 1)}>-</Button>
        </span>
    );
}

