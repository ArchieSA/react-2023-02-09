import React, {useState} from "react";

import { Counter } from "../Counter/Counter";
import { Ingredients } from "../Ingredients/Ingredients";

const DEFAULT_INGREDIENT_AMOUNT = 1;

export const Dish = ({ dish }) => {
    const { name, ingredients } = dish;
    const [amount, setAmount] = useState(0);
    const [ingredientAmounts, setIngredientAmounts] = useState(() => {
        const iAmounts = {};
        ingredients.forEach(ingredient => iAmounts[ingredient.id] = {
            name: ingredient.name,
            amount: DEFAULT_INGREDIENT_AMOUNT,
        });
        return iAmounts;
    });

    return (
        <div>
            <div>{name}</div>
            <div>
                <Counter value={amount} min={0} max={6} onChange={(value) => {setAmount(value)}} />
            </div>
            {amount ? (
                <Ingredients ingredientAmounts={ingredientAmounts} onChangeIngredientAmounts={(newIngredientAmounts => setIngredientAmounts(newIngredientAmounts))} />
            ): null}
        </div>
    );
}