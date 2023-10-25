import { useEffect, useState } from "react";
import "./styles.css";

// get weather data of london
const apiLondon =
  "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&daily=temperature_2m_max&timezone=GMT0";

function Weather({ apiURL = apiLondon }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then(setWeatherData)
      .catch((error) => console.log(error));
  }, [apiURL]);

  console.log(weatherData);

  if (weatherData === null) return <p>loading...</p>;

  // return <pre>{JSON.stringify(weatherData, null, 2)}</pre>;

  return (
    <>
      <h1>WeatherData</h1>
      <p> This weather data is from open-meteo.com</p>
      <h2>London</h2>
      <ul>
        <li>latitude: {weatherData.latitude}</li>
        <li>longitude: {weatherData.longitude}</li>
      </ul>
      <h2>temperature</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Max temperature(°C)</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.daily.time.map((date, i) => (
            <tr key={i}>
              <th>{date}</th>
              <td>{weatherData.daily.temperature_2m_max[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}
