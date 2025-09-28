import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number = 300) => {
  const [debounced, setDebounced] = useState(value);

  console.log("IN Debounce");

  useEffect(() => {
    console.log("IN Debounce UseEffect");
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};
