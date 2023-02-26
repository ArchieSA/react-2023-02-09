import React, { useState } from 'react'
import { Button } from '../Button/Button'


export const Ingredients = ({ingredients}) => {
    const [ingredientCount, setIngredientCount] = useState(1)
    // можно было вынести отдельно эти переменные, но наверняка есть вариант поумнее, поэтому я их просто скопровал...

    const increaseCount = () => {
        if (ingredientCount < 6) {
            setIngredientCount(e => e + 1)
        }
    }
    const decreaseCount = () => {
        if (ingredientCount > 0) {
            setIngredientCount(e => e - 1)
        }
    }

  return (
    <div>Ingredients: {ingredients.map(
        (ingredient) =>
        <div>
            {ingredient} 
            <Button onClick={() => decreaseCount()}>-</Button> 
            {ingredientCount} 
            <Button onClick={() => increaseCount()}>+</Button>
        </div>
    )}</div>
  )
}
