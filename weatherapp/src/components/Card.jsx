import React, { useEffect, useState } from "react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Card = ({ data }) => {
  console.log(data);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (JSON.stringify(data) !== '{}') {

    return (
      <div className="text-center">

              <div className="d-flex my-1 justify-content-center">
              <Clock value={value} />                
              </div>
        <h2> {data.name}, {data.sys.country}</h2>
        <h3>
          <img src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}`} alt="" />
          {data.main.temp }°C
        </h3>
        <p className="fw-bold">
          {data.weather[0].main}
        </p>
        <p className="fw-bold">Humidity:
        {data.main.humidity}%
        </p>
        <p className="fw-bold">Visibility:
        {data.visibility / 1000}km
        </p>
      </div>
    );
  }else{
    return (
      <h1 className="text-center">No Data search!</h1>
    );
  }
};

export default Card;
