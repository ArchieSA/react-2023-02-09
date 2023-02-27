import React, {useState} from 'react';
import {Button} from "../Button/Button";

const Ingredient = ({ingredient}) => {
  const [count, setCount] = useState(1);
  const plusClickHandler = () => setCount(count+1);
  const minusClickHandler = () => setCount(count-1);

  return (
    <div>
      <span>{ingredient}</span>
      <Button onClick={minusClickHandler} disabled={count <= 0}> - </Button>
      <span> {count} </span>
      <Button onClick={plusClickHandler} disabled={count >= 6}> + </Button>
    </div>
  );
};

export default Ingredient;