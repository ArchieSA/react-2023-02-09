import React, {useState} from 'react';
import {Button} from "../Button/Button";
import Ingredients from "../Ingredients/Ingredients";

const Dish = ({dish}) => {
  const [count, setCount] = useState(0);
  const plusClickHandler = () => setCount(count+1);
  const minusClickHandler = () => setCount(count-1);
  return (
    <div>
      <div>
        <span>Наименование: </span>
        <span>{dish.name}</span>
      </div>
      <div>
        <span>Цена: </span>
        <span>{dish.price}</span>
      </div>
      <div>
        <Button onClick={minusClickHandler} disabled={count <= 0}> - </Button>
        <span> {count} </span>
        <Button onClick={plusClickHandler} disabled={count >= 6}> + </Button>
      </div>
      {count > 0 && dish.ingredients.length > 0 && (
        <Ingredients ingredients={dish.ingredients} />
      )}
    </div>
  );
};

export default Dish;