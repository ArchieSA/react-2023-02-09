import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Ingredients } from '../Ingredients/Ingredients'

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish
  const [dishCounter, setDishCounter] = useState(0)
  const MaxDish = 6
  const MinDish = 0

  return (
    <div>
      <h4>{name}</h4>
      <div>
        {dishCounter < 1 ? <span>Price: </span> : <span>Total price: </span>}
        <span>{dishCounter <= 1 ? price : price * dishCounter}</span>
      </div>
      <div>
        <Button
          children={'-'}
          onClick={() => setDishCounter(dishCounter - 1)}
          disabled={dishCounter === MinDish}
        />
        {dishCounter}
        <Button
          children={'+'}
          onClick={() => setDishCounter(dishCounter + 1)}
          disabled={dishCounter === MaxDish}
        />
        {dishCounter === 0 ? (
          <div>{ingredients.map((item) => ` ${item}`)}</div>
        ) : (
          <Ingredients ingredients={ingredients} />
        )}
      </div>
    </div>
  )
}
