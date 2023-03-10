import React from "react";
import { useSelector } from "react-redux";
import { selectCartEntries } from "../../store/cart/selectors";

export const Cart = () => {
  const cart = useSelector(selectCartEntries);
  return (
    <ul>
      {cart.map(([name, count]) => (
        <li>
          {name} : {count}
        </li>
      ))}
    </ul>
  );
};
