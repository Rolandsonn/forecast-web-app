import React from "react";
import rain from "../assets/rain.gif";
import partlyCloudy from "../assets/partly_clody.gif";
const City = ({ forecast }) => {
  const { name, localtime } = forecast.location;
  const { condition } = forecast.current;
  const time = localtime.split(" ");

  // const handleBgLoad = () => {
  //   let gif;
  //   switch (condition.text) {
  //     case "Patchy light drizzle":
  //       gif = rain;
  //       break;
  //     case "Partly Cloudy":
  //       gif = partlyCloudy;
  //       break;
  //   }

  //   return gif;
  // };

  // const bg = handleBgLoad();

  return (
    <div className="city current">
      <div className="city__wrapper">
        {/* <img className="city__bg" src={bg} alt="" /> */}
        <p className="city__text">{name}</p>
        <p className="city__time">{time[1]}</p>
        <p className="city__text">{time[0]}</p>
      </div>
    </div>
  );
};

export default City;
