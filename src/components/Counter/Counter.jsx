import React from 'react';
import {Button} from "../Button/Button";

export const Counter = ({min, max, count, setCount}) => {
  const inc = () => count < max && setCount(count + 1);
  const dec = () => count > min && setCount(count - 1);

  return (
    <>
      <Button onClick={dec}>-</Button>
      <span>{count}</span>
      <Button onClick={inc}>+</Button>
    </>
  );
};