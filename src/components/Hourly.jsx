import React from "react";
import HourlyList from "./HourlyList";

const Hourly = ({ filteredHours }) => {
  return (
    <section>
      <div className="hourly">
        <h1 className="title">Hourly Forecast:</h1>
        <HourlyList filteredHours={filteredHours} />
      </div>
    </section>
  );
};

export default Hourly;
