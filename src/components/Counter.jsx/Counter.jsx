import React from 'react'
import { Button } from '../Button/Button'

export const Counter = ({ maxValue, minValue, onChange, count }) => {
  
  const MINCOUNT = minValue
  const MAXCOUNT = maxValue

  return (
    <>
      <Button onClick={() => onChange(count + 1)} disabled={count >= MAXCOUNT}>
        +
      </Button>
      <span>{count}</span>
      <Button onClick={() => onChange(count - 1)} disabled={count <= MINCOUNT}>
        -
      </Button>
    </>
  )
}
