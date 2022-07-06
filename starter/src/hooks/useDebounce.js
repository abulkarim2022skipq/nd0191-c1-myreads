// code copied from
// https://frontend-digest.com/adding-search-to-a-full-stack-react-application-668f02fb4a84

import React from "react";
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
export default useDebounce;
