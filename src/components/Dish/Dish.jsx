import React, { useState } from "react";
import { Counter } from "../Counter/Counter";
import { Ingredient } from "../Ingredient/Ingredient";

const MAX_DISHES_COUNT = 6;
const MIN_DISHES_COUNT = 0

export const Dish = ({ dish: { ingredients, name } }) => {
    const [dishesCount, setDishesCount] = useState(0);

    return (
        <>
            <h4>{name}</h4>
            <Counter
                onChange={setDishesCount}
                minValue={MIN_DISHES_COUNT}
                maxValue={MAX_DISHES_COUNT}
                value={dishesCount} />
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
