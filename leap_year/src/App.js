import "./styles.css";
import { useState, useMemo } from "react";

export default function App() {
  const [year, setYear] = useState("1970");
  const [month, setMonth] = useState("01");
  const [day, setDay] = useState("01");
  const [dayOfWeek, setDayOfWeek] = useState("");

  const isLeapYear = (year) => {
    console.log("calculating isleap");
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };

  // if year changed, isleap may change
  const isleap = useMemo(() => isLeapYear(parseInt(year)), [year]);

  const handleDateChange = (event) => {
    const dateParts = event.target.value.split("-");
    const [year, month, day] = dateParts;
    setYear(year);
    setMonth(month);
    setDay(day);

    const dateString = `${year}-${month}-${day}`;

    const dayOfWeek = getDayOfWeek(dateString);
    setDayOfWeek(dayOfWeek);
  };

  function getDayOfWeek(dateString) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay(); // 0...6
    return daysOfWeek[dayOfWeek];
  }

  return (
    <div className="App">
      <h1>useMemo example</h1>
      <label>
        date:
        <input
          type="date"
          label="date"
          value={`${year}-${month}-${day}`}
          onChange={handleDateChange}
        />
      </label>

      <ul>
        <li>isleap: {isleap.toString()}</li>
        <li>day of the week: {dayOfWeek} </li>
      </ul>

      <h3>Note:</h3>
      <p>
        Since isleap is implemented with useMemo, it is calculated only if year
        changed.
      </p>

      <p>See console.</p>
    </div>
  );
}
