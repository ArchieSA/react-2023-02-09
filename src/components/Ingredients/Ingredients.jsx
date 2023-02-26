import React from 'react'
import { Ingredient } from '../Ingredient/Ingredient'

export const Ingredients = ({ingredients}) => {
  return (
    <>
      <h3>Ingredients:</h3>
      <div>
        <ul>
            {
              ingredients.map((ingredient) => !!ingredient && <Ingredient ingredient={ingredient}/>)
            }
        </ul>
      </div>
    </>
  )     
}
