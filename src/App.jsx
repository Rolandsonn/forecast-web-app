import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { fetchWeather } from "./api/fetchWeather";
import Loading from "./components/Loading";

const App = () => {
  const [value, setValue] = useState("Jalal-Abad");
  const [mode, setMode] = useState(false);
  const [forecast, setForecast] = useState([]);
  const classMode = mode ? "dark" : "light";

  const Current = lazy(() => import("./components/Current"));
  const City = lazy(() => import("./components/City"));
  const Hourly = lazy(() => import("./components/Hourly"));

  const handleClick = () => {
    setMode(!mode);

    localStorage.setItem("mode", classMode);
  };

  const handleForm = (data) => {
    setValue(data);
  };

  useEffect(() => {
    fetchWeather("forecast", value)
      .then(({ data }) => {
        setForecast("");
        setForecast(data);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, [value]);

  const hour = forecast?.forecast?.forecastday?.[0].hour;

  const filteredHours = hour
    ?.filter((el, i) => i % 2 === 0)
    .slice(4, hour.length - 1);

  return (
    <div className={classMode}>
      <div className="container">
        <Header handleForm={handleForm} handleClick={handleClick} mode={mode} />

        <Suspense fallback={<Loading />}>
          {Object.keys(forecast).length > 0 && (
            <>
              <div className="box">
                <City forecast={forecast} />
                <Current forecast={forecast} />
              </div>

              <Hourly filteredHours={filteredHours} />
            </>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
