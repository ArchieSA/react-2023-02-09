import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Counter } from "../Counter/Counter";

export const Ingredient = ({ name }) => {
  const [amount, setAmount] = useState(1);

  return (
    <div>
      <span> {name} </span>
      <Counter amount={amount} setAmount={setAmount} />
    </div>
  );
};
