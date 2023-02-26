import React from "react";

export const Counter = ({ onRemove, onAdd, count, classname }) => {
  return (
    <div className={classname}>
      <button onClick={onRemove} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={onAdd} disabled={count >= 6}>
        +
      </button>
    </div>
  );
};
