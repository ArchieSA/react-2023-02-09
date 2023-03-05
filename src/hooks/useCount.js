import { useCallback, useState } from "react";

export const useCount = ({ initialValue = 0, min = 0, max } = {}) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(
    () =>
      setCount((currentCount) =>
        currentCount < max ? currentCount + 1 : currentCount
      ),
    [max]
  );

  const decrement = useCallback(
    () =>
      setCount((currentCount) =>
        currentCount > min ? currentCount - 1 : currentCount
      ),
    [min]
  );

  return {
    count,
    increment,
    decrement,
  };
};
