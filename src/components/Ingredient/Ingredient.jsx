import React, { useState } from "react";

import { Button } from "../Button/Button";

export const Ingredient = ({ ingredient }) => {
  const [count, setCount] = useState(1);

  const MIN_ING = 0;
  const MAX_ING = 6;

  return (
    <div>
      {ingredient}
      <Button onClick={() => setCount(count - 1)} disabled={count - 1 < MIN_ING}>-</Button>
      {count}
      <Button onClick={() => setCount(count + 1)} disabled={count + 1 > MAX_ING}>+</Button>
    </div>
  );
};
