import React, {useState} from "react";
import {Counter} from "../Counter/Counter";
import {DishIngredients} from "../DishIngredients/DishIngredients";

export const Dish = ({dish}) => {
    const {name, price, ingredients} = dish;
    const [countDish, setCountDish] = useState(0);


    return (
        <>
            <div>{name}</div>
            <div>Price: {price}</div>
            <Counter defaultCount={0} minCount={0} maxCount={6} count={countDish} setCount={setCountDish} />
            {!!countDish  && <DishIngredients ingredients={ingredients}/>}
        </>

    )
}
