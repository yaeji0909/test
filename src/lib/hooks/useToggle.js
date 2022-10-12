import { useState, useCallback } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onToggle = useCallback(() => {
    setValue(!value);
  }, [value]);
  return [value, onToggle];
}
