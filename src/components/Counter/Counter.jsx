import React, { useState } from 'react';
import { Button } from '../Button/Button';

export const Counter = ({ min, max, count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Button onClick={decrement} disabled={count <= min}>
        -
      </Button>
      <span> {count} </span>
      <Button onClick={increment} disabled={count >= max}>
        +
      </Button>
    </div>
  );
};
