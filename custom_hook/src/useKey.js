import { useEffect } from "react";
import { useState } from "react";

// custom hook
export default function useKey(initialKey) {
  const [key, setKey] = useState(initialKey);

  const handleKeydown = (event) => setKey(event.key);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [key]);

  return [key, setKey];
}
