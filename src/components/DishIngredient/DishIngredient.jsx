import React, {useState} from "react";
import {Counter} from "../Counter/Counter";

export const DishIngredient = ({ingredient}) => {
    const [count, setCount ]= useState(1);
    return (
        <div>
            <span>{ingredient}</span>
            <Counter count={count} setCount={setCount} minCount={0} maxCount={6}/>
        </div>
    )
}
