import React from "react";
import wind from "../assets/wind.svg";

const HourlyList = ({ filteredHours }) => {
  const hourElem = filteredHours?.map((el) => {
    const time = el.time?.split(" ")[1];

    const classNameBg = time >= "20:00" ? "hourly-night" : "hourly-day";

    return (
      <li className={`${classNameBg} hourly__item`}>
        <p>{time}</p>
        <img width={80} src={el.condition?.icon} alt={el.condition?.text} />
        <p>{el.temp_c}°C</p>
        <img width={35} src={wind} alt="wind" />
        <p>{el.wind_kph}</p>
      </li>
    );
  });

  return <ul className="hourly__list">{hourElem}</ul>;
};

export default HourlyList;
