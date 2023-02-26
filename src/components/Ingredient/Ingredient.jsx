import React, { useState } from 'react'
import { Button } from '../Button/Button'

export const Ingredient = ({ ingredient }) => {
  const [count, setCount] = useState(0)
  const MaxIng = 6
  const MinIng = 0

  return (
    <div>
      <span>{ingredient}</span>
      <Button
        children={'-'}
        onClick={() => setCount(count - 1)}
        disabled={count <= MinIng}
      />
      <span>{count}</span>
      <Button
        children={'+'}
        onClick={() => setCount(count + 1)}
        disabled={count >= MaxIng}
      />
    </div>
  )
}
