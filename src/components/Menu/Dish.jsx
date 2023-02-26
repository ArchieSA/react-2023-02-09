import React, { useState } from "react";
import { Button } from '../Button/Button'
import { Ingredients } from "./Ingredients";

export const Dish = ({ name, price, ingredients }) => {
    const [dishCount, setDishCount] = useState(0)
    const increaseCount = () => {
        if (dishCount < 6) {
            setDishCount(e => e + 1)
        }
    }
    const decreaseCount = () => {
        if (dishCount > 0) {
            setDishCount(e => e - 1)
        }
    }
  return (
    <div>
        <div>
        {name} 
        <Button onClick={() => decreaseCount()}>-</Button> 
        {dishCount} 
        <Button onClick={() => increaseCount()}>+</Button>
        </div>
        <div>Price: {price}</div>
        <div>{dishCount !== 0 ? <Ingredients ingredients={ingredients}></Ingredients> : null}</div>
    </div>
  )
}
