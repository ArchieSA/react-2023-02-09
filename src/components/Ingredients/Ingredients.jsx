import React from 'react'
import { Ingredient } from '../Ingredient/Ingredient'

export const Ingredients = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((item) => {
        return (
          <li>
            <Ingredient ingredient={item} />
          </li>
        )
      })}
    </ul>
  )
}
