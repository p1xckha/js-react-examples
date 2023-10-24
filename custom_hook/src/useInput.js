import { useState } from "react";

// custom hook
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
}

export default useInput;
