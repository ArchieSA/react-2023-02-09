import React, { useState } from 'react'
import { Counter } from '../Counter.jsx/Counter'
import { Ingredient } from '../Ingredient/Ingredient'

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish
  const [count, setCount] = useState(0)

  return (
    <>
      <h4>
        {name} - {price}EUR
      </h4>
      <Counter count={count} onChange={setCount} minValue={0} maxValue={6} />
      {!!count && !!ingredients.length &&
        ingredients.map((ingredient) => <Ingredient ingredient={ingredient} />)}
    </>
  )
}
