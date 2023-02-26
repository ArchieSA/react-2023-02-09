import React, { useState } from 'react'
import { Counter } from '../Counter.jsx/Counter'

export const Ingredient = ({ ingredient }) => {
  const [count, setCount] = useState(1)
  return (
    <div>
      {ingredient}
      <Counter count={count} onChange={setCount} minValue={1} maxValue={6} />
    </div>
  )
}
