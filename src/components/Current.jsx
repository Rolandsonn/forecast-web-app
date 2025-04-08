import React from "react";
import humidityIcon from "../assets/humidity.svg";
import wind from "../assets/wind.svg";
import pressure from "../assets/pressure-white.svg";
import uvIcon from "../assets/uv-white.svg";
import sunrise from "../assets/sunrise-white.svg";
import sunset from "../assets/sunset-white.svg";

const Current = ({ forecast }) => {
  const { astro } = forecast.forecast.forecastday[0];
  const {
    temp_c,
    feelslike_c,
    condition,
    humidity,
    wind_kph,
    pressure_mb,
    uv,
  } = forecast.current;

  return (
    <>
      <div className="current">
        <div className="current_1">
          <h2 className="current__title city__time">{temp_c}°C</h2>
          <h3 className="current__subtitle">
            Feels like: <b>{feelslike_c}°C</b>
          </h3>
          <div className="current__astro">
            <img width={48} src={sunrise} alt="sunrise" />
            <p>
              Sunrise
              <b>{astro?.sunrise}</b>
            </p>
          </div>
          <div className="current__astro">
            <img width={48} src={sunset} alt="sunset" />
            <p>
              Sunset
              <b> {astro?.sunset}</b>
            </p>
          </div>
        </div>
        <div className="current_2">
          <img width={200} src={condition?.icon} alt="icon" />
          <p>{condition?.text}</p>
        </div>
        <div className="current_3">
          <ul className="current__list">
            <li className="current__item">
              <img width={50} height={50} src={humidityIcon} alt="humidity" />
              <p>{humidity}%</p>
              <p className="current__text">Humidity</p>
            </li>
            <li className="current__item">
              <img width={50} height={50} src={wind} alt="wind" />
              <p>{wind_kph}km/h</p>

              <p className="current__text">Wind Speed</p>
            </li>
            <li className="current__item">
              <img width={50} height={50} src={pressure} alt="pressure" />
              <p>{pressure_mb}hPa</p>
              <p className="current__text">Pressure</p>
            </li>
            <li className="current__item">
              <img width={50} height={50} src={uvIcon} alt="uv" />
              <p>{uv}</p>
              <p className="current__text">UV</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Current;
