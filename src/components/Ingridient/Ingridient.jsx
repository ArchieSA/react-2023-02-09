import React, { useState } from 'react';
import { Counter } from '../Counter/Counter';

export const Ingridient = ({ children }) => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div>{children}</div>
      <Counter min={0} max={6} count={count} setCount={setCount}></Counter>
    </div>
  );
};
