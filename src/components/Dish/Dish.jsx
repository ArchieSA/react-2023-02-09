import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";

const MAX_DISHES_COUNT = 6;
const MIN_DISHES_COUNT = 0

export const Dish = ({ ingredients }) => {
    const [dishesCount, setDishesCount] = useState(0);

    return (
        <>
            <Button
                onClick={() => setDishesCount(dishesCount - 1)}
                disabled={dishesCount === MIN_DISHES_COUNT}>
                -
            </Button>
            <div>{dishesCount}</div>
            <Button
                onClick={() => setDishesCount(dishesCount + 1)}
                disabled={dishesCount === MAX_DISHES_COUNT}>
                +
            </Button>
            {dishesCount > 0 && (
                <>
                    <h5>Ingredients:</h5>
                    <ul>
                        {ingredients.map(x => <li><Ingredient ingredient={x} /></li>)}
                    </ul>
                </>
            )}
        </>
    );
};
