import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState(""); // State to track the selected friend

  // if you select other friend, rerender happens.
  const Greeting = React.memo(function Greeting({ name }) {
    console.log("Hello", name);
    return (
      <div className="greeting">
        <strong>Hello, {name}!</strong>
      </div>
    );
  });

  const handleSelectChange = (event) => {
    setSelectedFriend(event.target.value);
  };

  return (
    <div className="App">
      <h1>memo example</h1>
      <label>
        Select a friend:
        <select value={selectedFriend} onChange={handleSelectChange}>
          <option value="">Select a friend</option>
          <option value="Mary">Mary</option>
          <option value="Mary">Mary</option>
          <option value="Mary">Mary</option>
          <option value="John">John</option>
          <option value="John">John</option>
          <option value="John">John</option>
          <option value="Sam">Sam</option>
          <option value="Sam">Sam</option>
          <option value="Sam">Sam</option>
        </select>
      </label>

      <Greeting name={selectedFriend} />
      <h3>Note:</h3>
      <p>
        If you select other friend, React rerenders. Otherwise it does not
        rerender. Try selecting other friend and see console.
      </p>
    </div>
  );
}
