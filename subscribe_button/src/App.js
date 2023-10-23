import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  // Initialize isSubscribed with false using useState hook
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Use a separate state to track the alert message
  const [alertMessage, setAlertMessage] = useState("");

  // This effect will run whenever isSubscribed changes
  useEffect(() => {
    // Set the alert message based on the isSubscribed state
    if (isSubscribed) {
      setAlertMessage("Subscribing");
    } else {
      setAlertMessage("Not subscribing yet");
    }
  }, [isSubscribed]);

  // Handle the button click event
  const handleClick = () => {
    setIsSubscribed(!isSubscribed);
  };

  // Define the SubscribeButton component
  const SubscribeButton = ({ isSubscribed }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    let text;
    let style = {};

    // Determine the button text and style based on state
    if (!isSubscribed) {
      text = "subscribe";
      style = { background: "red", color: "white" };
    } else if (isMouseOver && isSubscribed) {
      text = "unsubscribe";
      style = { background: "blue", color: "white" };
    } else {
      text = "subscribing";
      style = { background: "red", color: "white" };
    }

    return (
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        style={style} // Apply the determined style
      >
        {text}
      </button>
    );
  };

  return (
    <div className="App">
      <h1>
        Subscribe Button<small>(as an example of useEffect)</small>
      </h1>
      <SubscribeButton isSubscribed={isSubscribed} />
      {alertMessage && <p>{alertMessage}</p>}
    </div>
  );
}
