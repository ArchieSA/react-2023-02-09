import React, { useState } from "react";
import { Button } from "../Button/Button";

const MAX_INGREDIENT_COUNT = 6;
const MIN_INGREDIENT_COUNT = 0

export const Ingredient = ({ ingredient }) => {
    const [ingredientCount, setIngredientCount] = useState(0);

    return (
        <>
            <div>{ingredient}</div>
            <Button
                onClick={() => setIngredientCount(ingredientCount - 1)}
                disabled={ingredientCount === MIN_INGREDIENT_COUNT}>
                -
            </Button>
            <div>{ingredientCount}</div>
            <Button
                onClick={() => setIngredientCount(ingredientCount + 1)}
                disabled={ingredientCount === MAX_INGREDIENT_COUNT}>
                +
            </Button>
           
        </>
    );
};
