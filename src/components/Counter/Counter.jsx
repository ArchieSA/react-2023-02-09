import React from "react";

import { Button } from "../Button/Button";

export const Counter = ({ index, setIndex }) => {
  const plus = () => {
    setIndex(index + 1);
  };

  const minus = () => {
    setIndex(index - 1);
  };

  return (
    <>
      <div>
        <Button onClick={minus} disabled={index === 0}>
          -
        </Button>
        {index}
        <Button onClick={plus} disabled={index === 6}>
          +
        </Button>
      </div>
    </>
  );
};