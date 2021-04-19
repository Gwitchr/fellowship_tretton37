import { useState, useEffect } from "react";
export function useDebounce(value: any, delay: number):any {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(false);

  useEffect(
    () => {

      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);


      return () => {
        clearTimeout(handler);
      };
    },

    [delay, value]
  );

  return debouncedValue;
}
