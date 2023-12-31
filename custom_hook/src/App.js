import "./styles.css";

// import custom hooks
import useInput from "./useInput.js";
import useKey from "./useKey.js";

// display key
function Message() {
  const [key, setKey] = useKey("");
  return (
    <p>
      You pressed <b>{key}</b>
    </p>
  );
}

function InputBox({ type, initialValue = "" }) {
  const valueInput = useInput(initialValue);
  return <input type={type} {...valueInput} />;
}

export default function App() {
  inputTypes = ["text", "color", "date"];
  return (
    <div className="App">
      <h1>Custom Hook example</h1>
      <h2>useKey example</h2>
      <p>press any key</p>
      <Message />
      <h2>useInput example</h2>
      <ul>
        {inputTypes.map((type, i) => (
          <li key={i}>
            {type}:
            <InputBox type={type} />
          </li>
        ))}
      </ul>
    </div>
  );
}
