import React from "react";
import { useSelector } from "react-redux";
import { selectCartEntries } from "../../store/cart/selectors";

import styles from "./styles.module.css";

export const Cart = () => {
  const cart = useSelector(selectCartEntries);
  return (
    <div className={styles.root}>
      <h4>Cart</h4>
      {cart.map(([name, count]) => (
        <div className={styles.dish}>
          <span>{name}</span>
          <span>{count}</span>
        </div>
      ))}
    </div>
  );
};
