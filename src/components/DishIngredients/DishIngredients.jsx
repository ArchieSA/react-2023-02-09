import React from "react";
import {DishIngredient} from "../DishIngredient/DishIngredient";

export const DishIngredients = ({ingredients}) => {
    return (
        <div>
            <span>Ingredients: </span>
            {ingredients.map(ingredient => (
                <DishIngredient ingredient={ingredient}/>
            ))}
        </div>
    )
}
