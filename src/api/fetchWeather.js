import axios from "axios";

export const fetchWeather = async (info, city = "Jalal-Abad") => {
  const apiKey = "e9a5d3b74bf84418b11193028231901";
  const API = `http://api.weatherapi.com/v1/${info}.json?key=${apiKey}&q=${city}`;

  const data = await axios(API).catch((err) =>
    console.error("error while fetching weather" + err)
  );

  return data;
};
