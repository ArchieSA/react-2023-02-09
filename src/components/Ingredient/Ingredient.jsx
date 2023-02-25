import React, { useState } from "react";
import { Button } from "../Button/Button";

export const Ingredient = ({ name }) => {
  const [amount, setAmount] = useState(1);

  return (
    <div>
      {name}{" "}
      <Button
        onClick={() => setAmount(amount - 1)}
        disabled={amount <= 0}
        children="-"
      />{" "}
      {amount}{" "}
      <Button
        onClick={() => setAmount(amount + 1)}
        disabled={amount >= 6}
        children="+"
      />
    </div>
  );
};
