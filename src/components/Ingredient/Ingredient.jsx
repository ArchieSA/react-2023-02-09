import React, { useState } from "react";
import { Button } from "../Button/Button";

export const Ingredient = ({ ingredient }) => {
  const [count, setCount] = useState(1);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {ingredient}
      <Button onClick={() => count > 0 && setCount(count - 1)}>-</Button>
      {count}
      <Button onClick={() => count < 6 && setCount(count + 1)}>+</Button>
    </div>
  );
};
