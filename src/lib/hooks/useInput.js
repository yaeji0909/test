import { useState, useCallback } from "react";

export default function useInput(defaultValue) {
  const [input, setInput] = useState(defaultValue);
  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  const onReset = useCallback(() => setInput(""), []);
  return [input, onChange, onReset];
}
