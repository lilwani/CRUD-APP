import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number = 3000) => {
  const [debounced, setDebounced] = useState(value);

  console.log("IN Debounce");

  useEffect(() => {
    console.log("IN Debounce UseEffect");
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => {
      console.log("clearing handler ", handler);
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounced;
};
