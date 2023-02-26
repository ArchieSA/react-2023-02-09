import React from "react";
import { Button } from "../Button/Button";

export const Counter = ({ amount, setAmount, min = 0, max = 6 }) => {
  const decrease = () => setAmount(amount - 1);
  const increase = () => setAmount(amount + 1);
  return (
    <div>
      <Button onClick={decrease} disabled={amount <= min} children="-" />
      {amount}
      <Button onClick={increase} disabled={amount >= max} children="+" />
    </div>
  );
};
