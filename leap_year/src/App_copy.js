import "./styles.css";
import { useState } from "react";

export default function App() {
  const [year, setYear] = useState(1970);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const MyForm = ({ type = "text", text, value, onChange }) => {
    return (
      <form>
        <label>
          {text}:
          <input type={type} value={value} onChange={onChange} />
        </label>
      </form>
    );
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form>
        <label>
          year:
          <input type="text" value={year} onChange={handleYearChange} />
        </label>
      </form>
    </div>
  );
}
