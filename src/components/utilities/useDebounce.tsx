import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number | undefined) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
};

export default useDebounce;
