import React from "react";
import { useSelector } from "react-redux";
import { selectCartEntries } from "../../store/cart/selectors";
import { selectDishEntries } from "../../store/entities/dish/selectors"

export const Cart = () => {
  const cart = useSelector(selectCartEntries);
  const dishEntries = useSelector(selectDishEntries)
  return (
    <ul>
      {cart.map(([id, count]) => (
        <li>
          {dishEntries[id]?.name} : {count}
        </li>
      ))}
    </ul>
  )
};
