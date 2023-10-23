import React, { useState } from "react";

function App() {
  // Initialize text state with an empty string using setState hook
  const [text, setText] = useState("");

  // This function is called when the text inside the textarea changes.
  // It updates the 'text' state with the new text provided as 'newText'.
  const handleTextChange = (newText) => {
    setText(newText);
  };

  const WordCount = () => {
    let numWords = 0; // mutable variable
    // check if text is not empty
    if (text.trim() != "") {
      numWords = text.split(" ").length;
    }
    return <p>{numWords} words</p>;
  };

  return (
    <div className="root">
      <h1 className="title">Character Count</h1>
      <textarea
        value={text}
        onChange={(e) => handleTextChange(e.target.value)}
        className="textInput"
        placeholder="Input text"
        rows={4}
      ></textarea>
      <p>{text.length} characters</p>{" "}
      {/* area btw curly brackets is a javascript area */}
      {/* we can comment here */}
      <WordCount />
    </div>
  );
}

export default App;
