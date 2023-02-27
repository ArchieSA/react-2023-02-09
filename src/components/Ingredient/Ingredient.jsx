import React, { useState } from "react";
import { Counter } from "../Counter/Counter";

const MAX_INGREDIENT_COUNT = 6;
const MIN_INGREDIENT_COUNT = 0

export const Ingredient = ({ ingredient }) => {
    const [ingredientCount, setIngredientCount] = useState(1);

    return (
        <>
            <div>{ingredient}</div>
            <Counter
                onChange={setIngredientCount}
                minValue={MIN_INGREDIENT_COUNT}
                maxValue={MAX_INGREDIENT_COUNT}
                value={ingredientCount} />
        </>
    );
};
