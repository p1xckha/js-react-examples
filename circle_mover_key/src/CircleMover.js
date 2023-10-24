import React, { useReducer, useEffect } from "react";

// Define initial state for the circle's position
const initialCirclePosition = {
  x: 50,
  y: 100
};

function reducer(state, action) {
  switch (action.type) {
    case "move_up":
      return { x: state.x, y: state.y - 5 };
    case "move_down":
      return { x: state.x, y: state.y + 5 };
    case "move_left":
      return { x: state.x - 5, y: state.y };
    case "move_right":
      return { x: state.x + 5, y: state.y };
    default:
      return state;
  }
}

export default function CircleMover() {
  const [circlePosition, dispatch] = useReducer(reducer, initialCirclePosition);

  // Add event listeners for arrow keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          dispatch({ type: "move_up" });
          break;
        case "ArrowDown":
          dispatch({ type: "move_down" });
          break;
        case "ArrowLeft":
          dispatch({ type: "move_left" });
          break;
        case "ArrowRight":
          dispatch({ type: "move_right" });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function Buttons() {
    directions = ["up", "left", "right", "down"];
    return (
      <div className="buttons-container">
        {directions.map((direction, i) => (
          <button
            key={direction}
            className={direction}
            onClick={() => dispatch({ type: "move_" + direction })}
          >
            {direction}
          </button>
        ))}
      </div>
    );
  }

  function Circle() {
    return (
      <div
        style={{
          width: "20px",
          height: "20px",
          background: "lightblue",
          borderRadius: "50%",
          position: "relative",
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`
        }}
      ></div>
    );
  }

  return (
    <>
      <h1>circle mover</h1>
      <p>
        pos: ({circlePosition.x}, {circlePosition.y})
      </p>
      <Buttons />
      <Circle />
      <p>Use arrow keys or buttons to move the circle.</p>
    </>
  );
}
