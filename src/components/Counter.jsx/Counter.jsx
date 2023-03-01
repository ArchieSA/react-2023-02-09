import React from 'react'
import { Button } from '../Button/Button'

export const Counter = ({ maxValue, minValue, onChange, count }) => {
  return (
    <>
      <Button onClick={() => onChange(count + 1)} disabled={count >= minValue}>
        +
      </Button>
      <span>{count}</span>
      <Button onClick={() => onChange(count - 1)} disabled={count <= maxValue}>
        -
      </Button>
    </>
  )
}
