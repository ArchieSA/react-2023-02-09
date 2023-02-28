import {Button} from "../Button/Button";
import React from "react";

export const Counter = ({count, setCount, minCount, maxCount}) => {
    const handleCountIncrement = () => {
        setCount(prev => {
            if(prev === maxCount) {
                return prev;
            }
            return prev + 1;
        })

    }
    const handleCountDecrement = () => {
        setCount(prev => {
            if(prev === minCount) {
                return prev;
            }
            return prev - 1;
        })
    }
    return (
        <>
            <Button onClick={handleCountDecrement} children="-" disabled={count === minCount}/>
            <span>{count}</span>
            <Button onClick={handleCountIncrement} children="+" disabled={count === maxCount}/>

        </>
    )
}
