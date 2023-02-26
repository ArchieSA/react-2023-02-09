import React from "react";

import { Counter } from "../Counter/Counter";

export const Ingredients = ({ ingredientAmounts, onChangeIngredientAmounts }) => {
    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {Object.keys(ingredientAmounts).map((ingredientid, curIndex) => (
                    <li key={ingredientid}>
                        <h4>{ingredientAmounts[ingredientid].name}</h4>
                        <Counter value={ingredientAmounts[ingredientid].amount} min={0} max={6} onChange={(newAmount) => {
                            onChangeIngredientAmounts({ ...ingredientAmounts, [ingredientid]: { ...ingredientAmounts[ingredientid], amount: newAmount}});
                        }} />
                    </li>
                ))}
            </ul>
        </div>
    )
}