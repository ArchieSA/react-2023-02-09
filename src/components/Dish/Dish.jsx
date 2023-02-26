import React, { useState } from 'react';
import { Counter } from '../Counter/Counter';
import { Ingridient } from '../Ingridient/Ingridient';

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  const { name, ingredients } = dish;
  return (
    <div>
      <div>{name}</div>
      <Counter min={0} max={6} count={count} setCount={setCount}></Counter>
      {count > 0 && (
        <ul>
          {ingredients?.length &&
            ingredients.map((ingridient) => (
              <li key={ingridient}>
                <Ingridient>{ingridient}</Ingridient>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
