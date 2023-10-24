import "./styles.css";
import { useEffect, useState } from "react";

// custom hook
const useKey = () => {
  const [key, setKey] = useState("");
  useEffect(() => {
    console.log("welcome");
    return () => console.log("good bye");
  }, []);
  return [key, setKey];
};

// display key
function Message() {
  const [key, setKey] = useKey("");

  useEffect(() => {
    const handleKeydown = function (event) {
      setKey(event.key);
      console.log(event.key + " is pressed");
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [key]);

  return <p>You pressed {key}</p>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Message />
    </div>
  );
}
